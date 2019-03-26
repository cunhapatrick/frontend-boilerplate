# Basic Boilerplate Instructions

## Ant Design Custom Theme

On the project's root directory, open `webpack.config.js`, inside rules > options > modifyVars, overwrite the variables following the ant design [instructions](https://ant.design/docs/react/customize-theme).

## General Configuration

### Change build directory name and other options

On the project's root directory, open `next.config.js`, inside withTypescript > withLess > withCss > modify distDir to change the build directory name.

### TSLint & Typescript Configuration

On the project's root directory, locate `tsconfig.json` to modify basic rules of the typescript and relative path's and locate `tslint.json` to modify syntax rules verification of the tslint for typescript.

### Babel Configuration

On the project's root directory is locate the basic preset configuration to use typescript with nextjs, the configuration of antd to use less/css and the jest configuration preset to run unit tests with typescript components.

###

# Develop, Build and Running Instructions

Run `$ yarn`.
Run `$ yarn dev` to run the development enviromnent of the project.
Run `$ yarn build && yarn start` to build and run the production enviromnent of the project.

# Run Tests

Run `$ yarn test` and wait for the results.

# Applied Tecnologies

## React Hooks

Used to mount the components examples of the component with some features like que useState and the useEffect and how to operate with them.

## SSR (Server Side Renderer)

Used to increase the performance of future applications, using nextjs to configure this procedure.

## TypeScript

Used to improve the syntax codification of the products

## Less

CSS pre-processor to build better css codification

## Antd

CSS modular Framework to help the creation of styled components

## Jest & Enzyme

Jest is a Test Web Framework used to run automatic test's on the application together with enzyme that mount virtual rendered components executing component unit tests.

## Redux & Redux Saga

Redux is used to help the data flow of the application storing the states of components inside one place and share with the rest of the application and the redux saga is used as a middleware feature for the redux that intercept a action request to work with third party api's and similar application without breaking the dataflow.
