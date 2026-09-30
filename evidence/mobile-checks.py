# Verifying SoloBill mobile layouts and keyboard navigation
import json
import shutil
import time
from pathlib import Path

output = Path('C:/Users/WINDOWS 10/Documents/SoloBill/evidence')
results_path = output / 'browser-results.json'
results = json.loads(results_path.read_text(encoding='utf-8'))


def record(name, passed, details):
    results.append({'check': name, 'passed': bool(passed), 'details': details})
    results_path.write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding='utf-8')
    print(name, 'PASS' if passed else 'FAIL', json.dumps(details, ensure_ascii=False))
    assert passed, name


def click_element(role, name, prefix=False):
    nodes = cdp('Accessibility.getFullAXTree')['nodes']
    matching = [n for n in nodes if n.get('role', {}).get('value') == role and (
        n.get('name', {}).get('value', '').startswith(name) if prefix else n.get('name', {}).get('value') == name
    )]
    assert len(matching) == 1, (role, name, len(matching))
    node_id = matching[0]['backendDOMNodeId']
    cdp('DOM.scrollIntoViewIfNeeded', backendNodeId=node_id)
    box = cdp('DOM.getBoxModel', backendNodeId=node_id)['model']['content']
    click_at_xy(sum(box[0::2]) / 4, sum(box[1::2]) / 4)
    time.sleep(0.12)


def keypress(key, code, virtual_key, text=None):
    arguments = {'type': 'keyDown', 'key': key, 'code': code, 'windowsVirtualKeyCode': virtual_key}
    if text is not None:
        arguments.update({'text': text, 'unmodifiedText': text})
    cdp('Input.dispatchKeyEvent', **arguments)
    cdp('Input.dispatchKeyEvent', type='keyUp', key=key, code=code, windowsVirtualKeyCode=virtual_key)
    time.sleep(0.12)


def screenshot(name):
    cdp('Page.bringToFront')
    path = output / name
    shutil.copyfile(capture_screenshot(), path)
    print('SCREENSHOT', str(path))


cdp('Emulation.setDeviceMetricsOverride', width=390, height=844, deviceScaleFactor=1, mobile=True)
goto_url('http://localhost:5173/')
wait_for_load()
cdp('Page.bringToFront')
screenshot('mobile-hero.png')

# Reach the menu without using JavaScript focus or a simulated DOM click.
keypress('Tab', 'Tab', 9)
state = js("({text:document.activeElement.innerText,top:document.activeElement.getBoundingClientRect().top,outline:getComputedStyle(document.activeElement).outlineWidth})")
record('Mobile skip link keyboard focus', state['text'] == 'Skip to content' and state['top'] >= 0 and state['outline'] == '3px', state)
keypress('Tab', 'Tab', 9)
keypress('Tab', 'Tab', 9)
state = js("({text:document.activeElement.innerText,expanded:document.activeElement.getAttribute('aria-expanded')})")
record('Mobile menu reachable by keyboard', state['text'] == 'Menu' and state['expanded'] == 'false', state)
keypress('Enter', 'Enter', 13, '\r')
state = js("({expanded:document.querySelector('.menu-toggle').getAttribute('aria-expanded'),display:getComputedStyle(document.querySelector('.navigation')).display,links:document.querySelectorAll('.navigation a').length})")
record('Mobile menu opens with Enter and expanded state', state['expanded'] == 'true' and state['display'] == 'flex' and state['links'] == 6, state)
screenshot('mobile-menu.png')
keypress('Escape', 'Escape', 27)
state = js("({expanded:document.querySelector('.menu-toggle').getAttribute('aria-expanded'),display:getComputedStyle(document.querySelector('.navigation')).display,focus:document.activeElement.className})")
record('Mobile menu Escape closes and returns focus', state['expanded'] == 'false' and state['display'] == 'none' and state['focus'] == 'menu-toggle', state)
keypress(' ', 'Space', 32, ' ')
state = js("({expanded:document.querySelector('.menu-toggle').getAttribute('aria-expanded')})")
record('Mobile menu opens with Space', state['expanded'] == 'true', state)

links = [('Overview', 'overview'), ('Services', 'services'), ('Our purpose', 'purpose'), ('Objectives', 'objectives'), ('Why SoloBill', 'why-solobill'), ('Contact', 'contact')]
for index, (label, target) in enumerate(links):
    if index > 0:
        click_element('button', 'Menu')
    click_element('link', label)
    state = js("({hash:location.hash,top:document.querySelector(location.hash).getBoundingClientRect().top,expanded:document.querySelector('.menu-toggle').getAttribute('aria-expanded'),navDisplay:getComputedStyle(document.querySelector('.navigation')).display})")
    record('Mobile anchor and menu close: ' + label, state['hash'] == '#' + target and state['top'] >= 72 and state['expanded'] == 'false' and state['navDisplay'] == 'none', state)

click_element('button', 'Menu')
click_element('link', 'Services')
click_element('button', 'Payment Tracker', prefix=True)
state = js("({selected:document.querySelector('.service-card[aria-pressed=\"true\"] .service-name').innerText,title:document.querySelector('#service-details h3').innerText,count:document.querySelectorAll('.service-list li').length})")
record('Mobile selected service changes while all services remain', state['selected'] == 'Payment Tracker' and state['title'] == 'Payment Tracker' and state['count'] == 5, state)
js("document.querySelector('#service-details').scrollIntoView({block:'center'})")
screenshot('mobile-services.png')

click_element('button', 'Menu')
click_element('link', 'Contact')
click_element('button', 'Check demo inquiry')
state = js("({invalid:document.querySelectorAll('[aria-invalid=\"true\"]').length,feedback:document.querySelector('.form-feedback').innerText,focus:document.activeElement.id})")
record('Mobile contact empty validation', state['invalid'] == 3 and 'Nothing has been sent' in state['feedback'] and state['focus'] == 'contact-name', state)
screenshot('mobile-contact-validation.png')
fill_input('#contact-name', 'Demo Student')
fill_input('#contact-email', 'demo@example.test')
fill_input('#contact-message', 'This is a sample inquiry about the SoloBill concept.')
click_element('button', 'Check demo inquiry')
state = js("({invalid:document.querySelectorAll('[aria-invalid=\"true\"]').length,feedback:document.querySelector('.form-feedback').innerText,overflow:document.documentElement.scrollWidth>innerWidth})")
record('Mobile contact valid demo feedback', state['invalid'] == 0 and 'not sent or saved' in state['feedback'] and not state['overflow'], state)
screenshot('mobile-contact.png')

goto_url('http://localhost:5173/')
wait_for_load()
click_element('link', 'Create a Free Invoice')
state = js("({hash:location.hash,top:document.querySelector('#invoice-demo').getBoundingClientRect().top,label:document.querySelector('#invoice-demo .section-intro').innerText})")
record('Mobile primary CTA reaches explicit preview', state['hash'] == '#invoice-demo' and state['top'] >= 72 and state['label'] == 'Invoice preview / demo', state)
js("document.querySelector('#invoice-demo .invoice-preview').scrollIntoView({block:'center'})")
screenshot('mobile-invoice.png')

for width in [320, 360, 390, 620, 768, 1024, 1440]:
    cdp('Emulation.setDeviceMetricsOverride', width=width, height=900, deviceScaleFactor=1, mobile=width <= 768)
    state = js("({viewport:innerWidth,documentWidth:document.documentElement.scrollWidth,bodyWidth:document.body.scrollWidth,heroColumns:getComputedStyle(document.querySelector('.hero-grid')).gridTemplateColumns,menuDisplay:getComputedStyle(document.querySelector('.menu-toggle')).display,services:document.querySelectorAll('.service-list li').length})")
    record('Responsive no horizontal overflow at ' + str(width) + 'px', state['documentWidth'] <= state['viewport'] and state['bodyWidth'] <= state['viewport'] and state['services'] == 5, state)

cdp('Emulation.setEmulatedMedia', features=[{'name': 'prefers-reduced-motion', 'value': 'reduce'}])
state = js("({matches:matchMedia('(prefers-reduced-motion: reduce)').matches,scroll:getComputedStyle(document.documentElement).scrollBehavior,animation:getComputedStyle(document.querySelector('.hero-grid')).animationName})")
record('Reduced-motion preference respected', state['matches'] and state['scroll'] == 'auto' and state['animation'] == 'none', state)
cdp('Emulation.setEmulatedMedia', features=[])

state = js("({errors:window.__verificationErrors,externalResources:performance.getEntriesByType('resource').filter(e=>new URL(e.name).origin!==location.origin).map(e=>e.name)})")
record('Mobile and responsive browser errors and local-only resources', state['errors'] == [] and state['externalResources'] == [], state)

# Leave the developer preview on the desktop hero, not a filled form.
cdp('Emulation.setDeviceMetricsOverride', width=1440, height=1000, deviceScaleFactor=1, mobile=False)
goto_url('http://localhost:5173/')
wait_for_load()
print('ALL BROWSER CHECKS', len(results), 'PASSED', sum(item['passed'] for item in results))
