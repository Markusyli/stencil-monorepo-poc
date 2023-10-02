# stencil-monorepo-poc

Simple project to test usage of shared component library made with Stencil. Provides component libraries for React and Vue, and simple consumer applications made with React and Vue.

Project structure goes as follows:
```
packages/
    ├── react-consumer-app/
    ├── react-library/
    ├── stencil-library/
    ├── vue-consumer-app/
    └── vue-library/
```

`stencil-library` contains the shared component library built with Stencil

`react-library` and `vue-library` are wrapper libraries built from same sources at `stencil-library`

`react-consumer-app` contains React application consuming the `react-library`

`vue-consumer-app` contains Vue application consuming the `vue-library`

## Deployed consumer apps (works only with dark mode enabled in the OS):

[React app](https://monorepo-test-amber-phi.vercel.app/) deployed in Vercel

[Vue app](https://vue-consumer-app.vercel.app/) (go to About page) deployed in Vercel
