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
    }
}
