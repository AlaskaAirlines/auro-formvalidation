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
