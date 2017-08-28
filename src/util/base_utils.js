/**
 * Utility module to help generating uniquie IDs for Invoices.
 */
export default {
    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1).toUpperCase();
        }
        return s4() + s4();
    },

    /**
     * Generates a unique ID for invoice
     */
    generateId() {
        return `INV-${this.guid()}`;
    },

    /**
     * Validation util to validate amount field.
     * @param pLineItems
     */
    validateLineItemAmount(pLineItems) {
        let validAmountField = true;
        pLineItems.forEach(function(lLineItem) {
            if (!lLineItem.invoiceAmount || lLineItem.invoiceAmount === '' || (isNaN(parseFloat(lLineItem.invoiceAmount)) && !isFinite(lLineItem.invoiceAmount))) {
                validAmountField = false;
            }
        });
        return validAmountField;
    },

    /**
     * Validation util to validate UserName field.
     * @param pUserName
     */
    validateUserNameField(pUserName) {
        let validUserNameField = true;
        if (!pUserName || pUserName === '') {
            validUserNameField = false;
        }
        return validUserNameField;
    },

    /**
     * Validation util to validate UserEmail field.
     * @param pUserEmail
     */
    validateUserEmailField(pUserEmail) {
        let validUserEmailField = true;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!pUserEmail || pUserEmail === '' || !re.test(pUserEmail)) {
            validUserEmailField = false;
        }
        return validUserEmailField;
    }
}
