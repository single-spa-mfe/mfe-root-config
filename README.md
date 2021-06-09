# mfe-root-config
Root config for Micro Frontend Application

## What is this?

This is an example microfrontend repo demonstrating how to use [single-spa](https://single-spa.js.org). You can see the code running at https://micro-frontend-service.netlify.app/.

## How does it work?

This repository is a javascript project that creates a javascript bundle that is an in-browser javascript module 


## Local development

[single spa documentation](https://single-spa.js.org/docs/recommended-setup#local-development)

```sh
git clone git@github.com:single-spa-mfe/mfe-react-app.git
cd mfe-react-app
yarn install
yarn start:dev --port 8500
```

```sh
git clone git@github.com:single-spa-mfe/mfe-angular-app.git
cd mfe-angular-app
npm install
npm start
```

```sh
git clone git@github.com:single-spa-mfe/mfe-root-config.git
cd mfe-root-config
yarn install
yarn start
open http://localhost:9000
```

