import React, {Component} from 'react';

import LineItemComponent from './LineItemComponent';

/**
 * React component to hold Invoice line items. Component would be responsible
 * for adding LineItems and handling related updates. We would also display
 * a read only total.
 */
class InvoiceLineItemsComponent extends Component {

    constructor(props) {
        super(props);

        this.handleDescriptionTextChange = this.handleDescriptionTextChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleLineItemAddition = this.handleLineItemAddition.bind(this);
    }

    /**
     * Handler method for description text change for a line item. We simply,
     * cascase the event to parent AddInvoiceContainer component.
     * @param event Event object fired by Description field of the line item.
     */
    handleDescriptionTextChange(event) {
        this.props.onLineItemDescriptionChange(event);
    }

    /**
     * Handler method for amount change for a line item. We simply,
     * cascase the event to parent AddInvoiceContainer component.
     * @param event Event object fired by Amount field of the line item.
     */
    handleAmountChange(event) {
        this.props.onLineItemAmountChange(event);
    }

    /**
     * Handler method for adding a new line item. We would just cascade the
     * event call up to parent container component.
     */
    handleLineItemAddition() {
        this.props.onNewLineItemAddition();
    }

    /**
     * Utility method to help add line items when user clicks on '+' button.
     *
     * Get lineItems passes in as props and map through the array to render
     * LineItemComponent based on every object entry in array.
     * @param lineItems Array of lineItem objects.
     * @see handleDescriptionTextChange()
     * @see handleAmountChange
     */
    createLineItems(lineItems) {
        let lLineItems;
        const self = this;
        lLineItems = lineItems.map(function(lineItem) {
            return (
                <div key={lineItem.id}>
                    <LineItemComponent
                        id={lineItem.id}
                        invoiceDescription={lineItem.invoiceDescription}
                        invoiceAmount={lineItem.invoiceAmount}
                        onDescriptionTextChange={self.handleDescriptionTextChange}
                        onAmountChange={self.handleAmountChange}
                    />
                </div>
            );
        })
        return <div>{lLineItems}</div>;
    }

    /**
     * Render method to render lineItem(s) and a '+' button to add more lineItems.
     * At initial render, one lineItem would always be present.
     * @see handleLineItemAddition
     */
    render() {
        return (
            <div>
                {this.createLineItems(this.props.lineItems)}
                <button name='addLineItem' onClick={this.handleLineItemAddition}>{'+'}</button>
            </div>
        );
    }
}

export default InvoiceLineItemsComponent;
