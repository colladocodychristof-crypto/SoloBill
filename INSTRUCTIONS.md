# SoloBill: install and run locally

This guide is for teammates using **Windows**. You do not need Git installed to use the ZIP download method below.

**Repository:** https://github.com/colladocodychristof-crypto/SoloBill

SoloBill is a React/Vite student business-portfolio demonstration. No database, API keys, account, or backend setup is required. The invoice is a read-only sample, and the contact form does not send or save messages.

## 1. Install Node.js

1. Open https://nodejs.org/en/download.
2. Download the **LTS version** for Windows.
3. Run the installer and keep the default options, including npm.
4. After installation, close and reopen any terminal or VS Code window.

The project requires **Node.js 22.12 or newer on the Node 22 release line, or a newer supported LTS version**. npm is included with Node.js.

## 2. Download and extract the project

1. Open https://github.com/colladocodychristof-crypto/SoloBill.
2. Click the green **Code** button.
3. Select **Download ZIP**.
4. Right-click the downloaded ZIP file and select **Extract All**.
5. Open the extracted folder.

Find the folder containing **`package.json`**, `src`, and `public`. With the repository's `main` branch, this will normally be called **`SoloBill-main`**.

> Do not run the project inside the ZIP file. Extract it first. If extraction creates nested folders, use the inner folder containing `package.json`.

## 3. Open the project in VS Code

If needed, install Visual Studio Code from https://code.visualstudio.com/.

1. Open VS Code.
2. Select **File > Open Folder**.
3. Choose the extracted project folder containing **`package.json`**.
4. Select **Terminal > New Terminal**.

The terminal should open in the project folder. All commands below must be run there.

## 4. Check Node.js and npm

Run these commands in the terminal:

```sh
node --version
npm --version
```

Both should display a version number. If either is reported as "not recognized," restart VS Code. If it still fails, reinstall Node.js with the default options.

If PowerShell reports that `npm.ps1` cannot be loaded, use `npm.cmd --version` instead. Use the corresponding `npm.cmd` commands in the following steps as well; no execution-policy change is necessary.

## 5. Install the project dependencies

Run:

```sh
npm ci
```

Wait until installation finishes and the terminal prompt returns.

- An internet connection is needed for this step.
- This installs the dependencies recorded in `package-lock.json` and creates the `node_modules` folder.
- Normally, you only need to do this once per downloaded copy, not every time you start the app.

If PowerShell blocks `npm.ps1`, run:

```sh
npm.cmd ci
```

## 6. Start SoloBill

Run:

```sh
npm run dev
```

If PowerShell blocks `npm.ps1`, run:

```sh
npm.cmd run dev
```

Vite will print a local address, usually:

```text
http://localhost:5173/
```

**Open the exact address printed in the terminal.** If port 5173 is already occupied, Vite may use another port.

Keep the terminal open while using the app. `localhost` refers to your own computer; each teammate runs their own copy using these steps.

## 7. Stop or run the app again

To stop the development server, press **Ctrl + C** in the terminal. If the terminal asks whether to terminate the batch job, confirm with **Y** and Enter.

To run it again:

1. Open the project folder in VS Code.
2. Open a terminal in that folder.
3. Run:

```sh
npm run dev
```

Use `npm.cmd run dev` if PowerShell blocks the normal command. You do not need to reinstall dependencies each time.

## 8. Get a newer version of the project

ZIP downloads do not update automatically.

1. Save or back up any local edits you want to keep.
2. Download the latest ZIP from the repository.
3. Extract it into a new folder so you do not overwrite your local edits.
4. Open the new project folder in VS Code.
5. Run `npm ci`, then `npm run dev`.

Use the `npm.cmd` alternatives if needed. If you want to contribute changes regularly, ask the team to set up Git or GitHub Desktop rather than repeatedly exchanging ZIP copies.

## Troubleshooting

| Problem | What to do |
| --- | --- |
| `node` or `npm` is not recognized | Close and reopen VS Code after installing Node.js. If it still fails, reinstall Node.js with the default options. |
| `npm.ps1 cannot be loaded` / scripts are disabled | Use `npm.cmd ci` and `npm.cmd run dev`. Do not change the machine's execution policy just to run this project. |
| `Could not read package.json` / `ENOENT` | You opened the wrong folder. Open the folder containing `package.json` and create a new terminal there. |
| Node engine/version error | Install a current supported Node.js LTS version, reopen VS Code, and run `npm ci` again. |
| Dependency installation fails because of a network error | Check your internet connection, then rerun `npm ci`. If it still fails, share the error with the team; do not delete the lockfile or use force flags as a first fix. |
| Browser says "site can't be reached" | Make sure `npm run dev` is still running and use the exact local address printed by Vite. |
| Port 5173 is occupied | Use the alternative port Vite prints. Do not stop unrelated applications just to free the default port. |
| The app shows an older version | Download and run the latest repository copy. Your extracted ZIP folder does not synchronize with GitHub. |

## Other useful project files

- [`README.md`](README.md): project overview, technical structure, and limitations.
- [`DEMO-SCRIPT.md`](DEMO-SCRIPT.md): screen sequence and voice-over script for recording the demonstration.
- [`REQUIREMENTS.md`](REQUIREMENTS.md): assignment mapping and verification status.

This guide covers installing and running the development app. It does not certify design approval, passing production checks, or submission readiness. See `REQUIREMENTS.md` for the recorded status.
