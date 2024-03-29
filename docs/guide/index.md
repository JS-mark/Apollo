# Getting Started

## Scaffolding Your First Apollo Project

::: tip Compatibility Note
Vite requires [Node.js](https://nodejs.org/en/) version >=12.2.0. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.
:::

With NPM:

```bash
npm create apollo@latest
```

With Yarn:

```bash
yarn create apollo
```

With PNPM:

```bash
pnpm create apollo
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Apollo + Vue project, run:

```bash
# npm 6.x
npm create apollo@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create apollo@latest my-vue-app -- --template vue

# yarn
yarn create apollo my-vue-app --template vue

# pnpm
pnpm create apollo my-vue-app -- --template vue
```

See [create-vite](https://github.com/JS-mark/apollo/tree/main/packages/create-apollo) for more details on each supported template: `vanilla`, `vanilla-ts`, `vue`, `vue-ts`, `react`, `react-ts`, `preact`, `preact-ts`, `lit`, `lit-ts`, `svelte`, `svelte-ts`.

## Community Templates

create-vite is a tool to quickly start a project from a basic template for popular frameworks. Check out Awesome Vite for [community maintained templates](https://github.com/vitejs/awesome-vite#templates) that include other tools or target different frameworks. You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with one of the templates.

```bash
npx degit user/project my-project
cd my-project

npm install
npm run dev
```

If the project uses `main` as the default branch, suffix the project repo with `#main`

```bash
npx degit user/project#main my-project
```
