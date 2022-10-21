# ng12-standalone-app

Getting started:

`npm install`


Launch the test runner:

`npm run cypress:open`


When attempting to run the only configured component test, an error is thrown:

````
Error
The following error originated from your test code, not from Cypress.

> Module parse failed: Unexpected token (28:8)
File was processed with these loaders:
* ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js
You may need an additional loader to handle the result of these loaders.
| // Alternatively, can be defined in cypress/support/component.d.ts
| // with a <reference path="./component" /> at the top of your spec.
> declare global {
|   namespace Cypress {
|     interface Chainable {

When Cypress detects uncaught errors originating from your test code it will automatically fail the current test.

Cypress could not associate this error to any specific test.

We dynamically generated a new test to display this failure.
````