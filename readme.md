# Basic Boilerplate Instructions

## Ant Design Custom Theme

On the project's root directory, open `webpack.config.js`, inside rules > options > modifyVars, overwrite the variables following the ant design [instructions](https://ant.design/docs/react/customize-theme).

## General Configuration

### Change build directory name and other options

On the project's root directory, open `next.config.js`, inside withTypescript > withLess > withCss > modify distDir to change the build directory name.

### TSLint & Typescript Configuration

On the project's root directory, locate `tsconfig.json` to modify basic rules of the tyscript and locate `tslint.json` to modify syntax rules verification of the tslint for typescript.

### Babel Configuration

On the project's root directory is locate the basic preset configuration to use typescript with nextjs and the configuration of antd to use less.

# Develop, Build and Running Instructions

Run `$ yarn`.
Run `$ yarn dev` to run the development enviromnent of the project.
Run `$ yarn build && yarn start` to build and run the production enviromnent of the project.

# Run Tests
