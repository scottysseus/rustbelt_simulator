# _Rustfield Revival_

[🕹️ Try it out!](https://scottysseus.github.io/rustfield-revival/)

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

Use VSCode. Install the eslint extension.

## Deployment

This game is deployed to GitHub Pages using GitHub actions. The deployment occurs in 2 phases:

After each commit to the `main` branch...

1. The [webpack-build-prod](https://github.com/scottysseus/rustfield-revival/actions/workflows/webpack-build-prod.yml) workflow copies the new commits from `main` to the `deploy` branch. It uses `webpack` to build the production bundle, and commits the production bundle to the `deploy` branch.
2. The [pages-build-deployment](https://github.com/scottysseus/rustfield-revival/actions/workflows/pages/pages-build-deployment) workflow (which is managed by the GitHub Pages feature, which can be configured in the repository settings) deploys the app out of the `docs/` directory of the `deploy` branch.
