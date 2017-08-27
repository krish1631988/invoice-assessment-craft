import React, {Component} from 'react';

import LineItemComponent from './LineItemComponent';

class InvoiceLineItemsComponent extends Component {
    constructor(props) {
        super(props);
        this.nextLineItemID = 0;
        this.state = {
            lineItems: [
                {
                    id: this.nextLineItemID,
                    invoiceDescription: 'Test description',
                    invoiceAmount: '100'
                }
            ]
        };

        this.handleLineItemAddition = this.handleLineItemAddition.bind(this);
        this.handleDescriptionTextChange = this.handleDescriptionTextChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
    }

    handleDescriptionTextChange(event) {
        let currentLineItems = this.state.lineItems;
        currentLineItems.forEach(function(lineItem) {
            if (parseInt(event.target.id) === lineItem.id) {
                lineItem.invoiceDescription = event.target.value;
            }
        });
        this.setState({
            lineItems: currentLineItems
        });
    }

    handleAmountChange(event) {
        let currentLineItems = this.state.lineItems;
        currentLineItems.forEach(function(lineItem) {
            if (parseInt(event.target.id) === lineItem.id) {
                lineItem.invoiceAmount = event.target.value;
            }
        });
        this.setState({
            lineItems: currentLineItems
        });
    }

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

    handleLineItemAddition() {
        let currentLineItems = this.state.lineItems;
        this.nextLineItemID++;
        const newLineItem = {
            id: this.nextLineItemID,
            invoiceDescription: 'Default description',
            invoiceAmount: '100'
        };
        currentLineItems.push(newLineItem);
        this.setState({
            lineItems: currentLineItems
        });
    }

    render() {
        return (
            <div>
                {this.createLineItems(this.state.lineItems)}
                <button name='addLineItem' onClick={this.handleLineItemAddition}>{'+'}</button>
            </div>
        );
    }
}

export default InvoiceLineItemsComponent;
