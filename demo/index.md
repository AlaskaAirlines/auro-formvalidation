# Auro-FormValidation

## Description

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../partials/description.md) -->
<!-- The below content is automatically added from ./../partials/description.md -->
The `auro-formvalidation` is a JavaScript utlity that handles element validation. The purpose of having a separate validation utility is to ensure consitent validation workflow and results across all form element.

The AuroDesignSystem validation workflow closely mirrors the [HTML5 form elements validation workflow](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation).
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../partials/useCases.md) -->
<!-- The below content is automatically added from ./../partials/useCases.md -->
Validation allows for setting the following optional requirements on a form element. These options can be used individually or in any combination.

- `required`: Specifies whether a form field needs to be filled in before the form can be submitted.
- `minlength` and `maxlength`: Specifies the minimum and maximum length of textual data (strings).
- `min` and `max`: Specifies the minimum and maximum values of numerical input types.
- `type`: Specifies whether the data needs to be a number, an email address, or some other specific preset type.
- `pattern`: Specifies a regular expression that defines a pattern the entered data needs to follow.
- `error`: Forces the validation state to be _invalid_ and defines the custom validation messeage to display.
<!-- AURO-GENERATED-CONTENT:END -->

## Setup validation in a new component

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../partials/usingValidation.md) -->
<!-- The below content is automatically added from ./../partials/usingValidation.md -->

### 1. Install the NPM package

```cmd
npm i @aurodesignsystem/auro-formvalidation
```

### 2. Import the class

```js
import { AuroFormValidation } from "./validation.js";
```

### 3. Create a new instance of the validation class export

Create a new instance of the class export within the component constructor. You must also configure a `value` and `validity` property on the component with a default value of undefined.

Optionally, you may support the `noValidate` attribute to prevent validation on `blur` event.

```js
  constructor() {
    super();

    // this.noValidate = false;
    this.validity = undefined;
    this.value = undefined;

    /**
     * @private
     */
    this.validation = new AuroFormValidation();
  }

    static get properties() {
      return {
        // noValidate: {
        //   type: String
        // },
        validity: {
          type: String
        },
        value: {
          type: String
        }
      }
    }
```

### 4. Execute the validation

Executing validation is done by adding a function to execute on element `blur` event and setting up calls when `value` or `error` properties change.

```js
/**
 * Function to support @blur event.
 * @private
 * @return {void}
 */
handleBlur() {
  if (!this.noValidate) {
    this.validation.validate(this);
  }
}

updated(changedProperties) {
  if (changedProperties.has('value')) {
      if (!this.shadowRoot.contains(this.getActiveElement())) {
        this.validation.validate(this);
      }
    }
  }

  if (changedProperties.has('error')) {
    // If the error attribute has been removed, reset the validity before validation
    if (!this.error) {
      this.setCustomValidity = undefined;
      this.validity = undefined;
      this.removeAttribute('validity');
    }

    this.validation.validate(this);
  }
}
```

## Recommended Use

### When to validate

<!-- AURO-GENERATED-CONTENT:START (FILE:src=executesWhen.md) -->
<!-- The below content is automatically added from executesWhen.md -->
Validation should execute at the following times:

- `value` is changed
- `error` is changed
- On `blur` event

When adding validation to a form element component, event listeners must be added for these events and on `updated` for the changede properties.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=validateOnInput.md) -->
<!-- The below content is automatically added from validateOnInput.md -->
For form elements that contain an input element _(e.g. `aro-input`, `auro-comobobox`, `auro-datepicker`)_, the `validateOnInput` attribute may be applied. When `true`, the component will execute with each character change to the input.
<!-- The below content is automatically added from executesWhen.md -->
<!-- AURO-GENERATED-CONTENT:END -->

### Make validation public

<!-- AURO-GENERATED-CONTENT:START (FILE:src=publicValidation.md) -->
<!-- The below content is automatically added from publicValidation.md -->
It is recommended to support a public method to invoke validation on the element. This may be done by adding the following code sample.

```js
/**
 * Support a public call to validate the component.
 * @return {void}
 */
validate() {
  this.validation.validate(this);
}
```
<!-- The below content is automatically added from executesWhen.md -->
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:END -->

## Validation Results

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../partials/validationResults.md) -->
<!-- The below content is automatically added from ./../partials/validationResults.md -->

## Validation Results

When validation is executed the `validity` and `helpText` will be determined.

### Validity

`validity`: Returns a `ValidityState` object that contains several properties describing the validity state of the element. You can find full details of all the available properties in the ValidityState reference page; below is listed a few of the more common ones:
patternMismatch: Returns true if the value does not match the specified pattern, and false if it does match. If true, the element matches the :invalid CSS pseudo-class.

- `valid`: The element meets all its validation constraints, and is therefore considered to be valid.
- `badInput`: The value does not match the valid regex `pattern` set on the element.
- `customError`: The element has an `error` attribute applied.
- `rangeOverflow`: The value is greater than the maximum specified by the max attribute.
- `rangeUnderflow`: The value is less than the minimum specified by the min attribute.
- `tooLong`: The value is longer than the maximum length specified by the maxlength attribute.
- `tooShort`: The value is shorter than the minimum length specified by the minlength attribute.
- `valueMissing`: The element has a required attribute, but no value.

### Help/Error Text

When the `validity` is not `valid`, the help text will display an error message. For components with an input, this message will default to using the message supplied by the browswer for the HTML5 input. This may be replaced with a custom message. For all other components, the validity message must be provided.

To set a custom message reference the table below and provide a string.

```js
element.setCustomValidityRangeOverflow = 'The value is below the minimum number.';
```

| Property | Validity | Message Property |
| -------- | -------------- | ---------------- |
| `pattern` | `badInput` | `setCustomValidityBadInput` |
| `min` | `rangeOverflow` | `setCustomValidityRangeOverflow` |
| `max` | `rangeUnderflow` | `setCustomValidityRangeUnderflow` |
| `minLength` | `tooLong` | `setCustomValidityTooLong` |
| `maxLength` | `tooShort` | `setCustomValidityTooShort` |
| `required` | `valueMissing` | `setCustomValiditytValueMissing` |
<!-- AURO-GENERATED-CONTENT:END -->
