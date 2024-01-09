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

When the `validity` is not `valid`, the help text will display an error message. For components with an input, this message will default to using the message supplied by the browser for the HTML5 input. This may be replaced with a custom message. For all other components, the validity message must be provided.

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
