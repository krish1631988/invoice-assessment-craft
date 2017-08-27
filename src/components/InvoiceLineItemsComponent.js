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
    }

    createLineItems(lineItems) {
        let lLineItems;
        lLineItems = lineItems.map(function(lineItem) {
            return (
                <div key={lineItem.id}>
                    <LineItemComponent
                        id={lineItem.id}
                        invoiceDescription={lineItem.invoiceDescription}
                        invoiceAmount={lineItem.invoiceAmount}
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
            invoiceDescription: 'Test Description 3',
            invoiceAmount: '300'
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
