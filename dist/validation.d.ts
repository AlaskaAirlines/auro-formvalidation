export default class AuroFormValidation {
    runtimeUtils: any;
    /**
     * Determines the validity state of the element based on the common attribute restrictions (pattern).
     * @private
     * @param {object} elem - HTML element to validate.
     * @returns {void}
     */
    private validateAttributes;
    /**
     * Determines the validity state of the element based on the type attribute.
     * @private
     * @param {object} elem - HTML element to validate.
     * @returns {void}
     */
    private validateType;
    /**
     * Determines the validity state of the element.
     * @param {object} elem - HTML element to validate.
     * @param {boolean} force - Boolean that forces validation to run.
     * @returns {void}
     */
    validate(elem: object, force: boolean): void;
    /**
     * Gets all the HTML5 `inputs` in the element shadow DOM.
     * @private
     * @param {object} elem - HTML element to validate.
     * @returns {void}
     */
    private getInputElements;
    inputElements: any;
    /**
     * Gets all the `auro-inputs` in the element shadow DOM.
     * @private
     * @param {object} elem - HTML element to validate.
     * @returns {void}
     */
    private getAuroInputs;
    auroInputElements: any;
    /**
     * Return appropriate error message.
     * @private
     * @param {object} elem - HTML element to validate.
     * @returns {void}
     */
    private getErrorMessage;
}
//# sourceMappingURL=validation.d.ts.map