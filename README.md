# _Rustfield Revival_

## Development Instructions

### Quick Setup

After cloning the repository, pull all the JavaScript dependencies:

```bash
npm install
```

Then, run the [WebPack DevServer](https://webpack.js.org/configuration/dev-server/), which hot-reloads all changes you make:

```bash
npm run start
```

The app can be viewed in your browser at http://localhost:3000

### Further Setup

Developers should configure their IDEs to lint-on-save. For VS Code users, press `Ctrl + Shift + P` to open the Command Palette, and type `Preferences: Open Settings (JSON)` to open the `settings.json` file. Paste the below settings into the file:

```json
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
    ]
```

_Note: `editor.formatOnSave` should be set to false so that the editor's formatting does not conflict with ES Lint's._