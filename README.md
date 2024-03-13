# Auro Form Utilities

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
The `auro-formvalidation` is a JavaScript utility that handles element validation. The purpose of having a separate validation utility is to ensure consistent validation workflow and results across all form element.

The AuroDesignSystem validation workflow closely mirrors the [HTML5 form elements validation workflow](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation).
<!-- AURO-GENERATED-CONTENT:END -->

## UI development browser support

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/browserSupport.md) -->
For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/componentInstall_esm.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-formvalidation/testPublish.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-formvalidation/actions/workflows/testPublish.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-formvalidation?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-formvalidation)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-formvalidation?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

```shell
$ npm i @aurodesignsystem/auro-formvalidation
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

<!-- AURO-GENERATED-CONTENT:END -->

### Define dependency in project component

```js
import "@aurodesignsystem/auro-formvalidation";
```

## auro-formvalidation use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
Validation allows for setting the following optional requirements on a form element. These options can be used individually or in any combination.

- `required`: Specifies whether a form field needs to be filled in before the form can be submitted.
- `minlength` and `maxlength`: Specifies the minimum and maximum length of textual data (strings).
- `min` and `max`: Specifies the minimum and maximum values of numerical input types.
- `type`: Specifies whether the data needs to be a number, an email address, or some other specific preset type.
- `pattern`: Specifies a regular expression that defines a pattern the entered data needs to follow.
- `error`: Forces the validation state to be _invalid_ and defines the custom validation message to display.
<!-- AURO-GENERATED-CONTENT:END -->

## API Code Examples

## Development

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/developmentDescription.md) -->
In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

<!-- AURO-GENERATED-CONTENT:END -->

### API generation

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/api.md) -->
The custom element API file is generated in the build and committed back to the repo with a version change. If the API doc has changed without a version change, author's are to run `npm run build:api` to generate the doc and commit to version control.

<!-- AURO-GENERATED-CONTENT:END -->

### Testing

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/testing.md) -->
Automated tests are required for every Auro component. See `.\test\auro-formvalidation.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.

<!-- AURO-GENERATED-CONTENT:END -->
