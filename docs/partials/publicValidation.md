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
