# Verifying SoloBill desktop interactions in local Chrome

import json
import shutil
import time
from pathlib import Path

output = Path('C:/Users/WINDOWS 10/Documents/SoloBill/evidence')
results_path = output / 'browser-results.json'
results = []


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


def screenshot(name):
    cdp('Page.bringToFront')
    path = output / name
    shutil.copyfile(capture_screenshot(), path)
    print('SCREENSHOT', str(path))


new_tab('about:blank')
cdp('Emulation.setDeviceMetricsOverride', width=1440, height=1000, deviceScaleFactor=1, mobile=False)
cdp('Page.addScriptToEvaluateOnNewDocument', source="(() => {window.__verificationErrors=[]; window.addEventListener('error',e=>window.__verificationErrors.push({kind:'error',message:e.message})); window.addEventListener('unhandledrejection',e=>window.__verificationErrors.push({kind:'rejection',message:String(e.reason)})); const oldError=console.error; console.error=(...a)=>{window.__verificationErrors.push({kind:'console.error',message:a.map(String).join(' ')});oldError(...a)};})()")
goto_url('http://localhost:5173/')
wait_for_load()
state = js("({services:document.querySelectorAll('.service-list li').length,objectives:document.querySelectorAll('.objectives-list li').length,benefits:document.querySelectorAll('.benefits-grid > div').length,sections:document.querySelectorAll('main section').length,totals:[...document.querySelectorAll('.invoice-total strong')].map(e=>e.innerText),errors:window.__verificationErrors})")
record('Desktop content and invoice data', state['services'] == 5 and state['objectives'] == 4 and state['benefits'] == 5 and state['sections'] == 8 and state['totals'] == ['₱4,000.00', '₱4,000.00'], state)
screenshot('desktop-hero.png')

click_element('link', 'Create a Free Invoice')
state = js("({hash:location.hash,top:document.querySelector('#invoice-demo').getBoundingClientRect().top,label:document.querySelector('#invoice-demo .section-intro').innerText})")
record('Primary CTA opens the explicit invoice demo', state['hash'] == '#invoice-demo' and 84 <= state['top'] <= 120 and state['label'] == 'Invoice preview / demo', state)
screenshot('desktop-invoice-demo.png')

links = [('Overview', 'overview'), ('Services', 'services'), ('Our purpose', 'purpose'), ('Objectives', 'objectives'), ('Why SoloBill', 'why-solobill'), ('Contact', 'contact')]
for label, target in links:
    click_element('link', label)
    state = js("({hash:location.hash,top:document.querySelector(location.hash).getBoundingClientRect().top,atBottom:scrollY+innerHeight>=document.documentElement.scrollHeight-1})")
    visible_target = 84 <= state['top'] <= 120 or (state['atBottom'] and 84 <= state['top'] < 1000)
    record('Desktop anchor: ' + label, state['hash'] == '#' + target and visible_target, state)

click_element('link', 'Services')
service_names = ['Quotation Generator', 'Invoice Generator', 'Client Manager', 'Payment Tracker', 'Income Dashboard']
for name in service_names:
    click_element('button', name, prefix=True)
    state = js("({title:document.querySelector('#service-details h3').innerText,description:document.querySelector('#service-details > p:not(.selection-label)').innerText,selected:[...document.querySelectorAll('.service-card[aria-pressed=\"true\"] .service-name')].map(e=>e.innerText),count:document.querySelectorAll('.service-list li').length})")
    record('Service selection: ' + name, state['title'] == name and state['selected'] == [name] and state['count'] == 5 and len(state['description']) > 20, state)
click_element('button', 'Invoice Generator', prefix=True)
cdp('Input.dispatchKeyEvent', type='keyDown', key='Tab', code='Tab', windowsVirtualKeyCode=9)
cdp('Input.dispatchKeyEvent', type='keyUp', key='Tab', code='Tab', windowsVirtualKeyCode=9)
cdp('Input.dispatchKeyEvent', type='keyDown', key='Enter', code='Enter', windowsVirtualKeyCode=13, text='\r', unmodifiedText='\r')
cdp('Input.dispatchKeyEvent', type='keyUp', key='Enter', code='Enter', windowsVirtualKeyCode=13)
time.sleep(0.12)
state = js("({title:document.querySelector('#service-details h3').innerText,focused:document.activeElement.innerText,outline:getComputedStyle(document.activeElement).outlineStyle,outlineWidth:getComputedStyle(document.activeElement).outlineWidth})")
record('Service selector keyboard and visible focus', state['title'] == 'Client Manager' and state['outline'] != 'none' and state['outlineWidth'] != '0px', state)
click_element('link', 'Services')
screenshot('desktop-services.png')

click_element('link', 'Contact')
requests_before = js('performance.getEntriesByType("resource").length')
click_element('button', 'Check demo inquiry')
state = js("({errors:[...document.querySelectorAll('.field-error')].map(e=>e.innerText),invalid:document.querySelectorAll('[aria-invalid=\"true\"]').length,feedback:document.querySelector('.form-feedback').innerText,focus:document.activeElement.id})")
record('Contact empty-field validation', state['invalid'] == 3 and len(state['errors']) == 3 and state['focus'] == 'contact-name' and 'Nothing has been sent' in state['feedback'], state)
fill_input('#contact-name', 'Demo Student')
fill_input('#contact-email', 'not-an-email')
fill_input('#contact-message', 'short')
click_element('button', 'Check demo inquiry')
state = js("({errors:[...document.querySelectorAll('.field-error')].map(e=>e.innerText),invalid:document.querySelectorAll('[aria-invalid=\"true\"]').length,focus:document.activeElement.id})")
record('Contact invalid email and short message', state['invalid'] == 2 and len(state['errors']) == 2 and state['focus'] == 'contact-email', state)
screenshot('desktop-contact-validation.png')
fill_input('#contact-email', 'demo@example.test')
fill_input('#contact-message', 'This is a sample inquiry about the SoloBill concept.')
click_element('button', 'Check demo inquiry')
state = js("({errors:document.querySelectorAll('.field-error').length,feedback:document.querySelector('.form-feedback').innerText,requests:performance.getEntriesByType('resource').length,hash:location.hash})")
record('Contact valid demo explicitly not sent or saved', state['errors'] == 0 and 'not sent or saved' in state['feedback'], state)
record('Contact submit makes no resource request or navigation', state['requests'] == requests_before and state['hash'] == '#contact', {'before': requests_before, 'after': state['requests'], 'hash': state['hash']})
click_element('link', 'Contact')
screenshot('desktop-contact.png')

state = js("({errors:window.__verificationErrors,externalResources:performance.getEntriesByType('resource').filter(e=>new URL(e.name).origin !== location.origin).map(e=>e.name),missingLabels:[...document.querySelectorAll('input,textarea')].filter(e=>![...document.querySelectorAll('label')].some(l=>l.htmlFor===e.id)).map(e=>e.id),duplicateIds:[...document.querySelectorAll('[id]')].map(e=>e.id).filter((id,i,a)=>a.indexOf(id)!==i),overflow:document.documentElement.scrollWidth>innerWidth})")
record('Desktop browser errors, labels, IDs, and local-only resources', state['errors'] == [] and state['externalResources'] == [] and state['missingLabels'] == [] and state['duplicateIds'] == [] and not state['overflow'], state)
print('DESKTOP CHECKS COMPLETE', len(results))
