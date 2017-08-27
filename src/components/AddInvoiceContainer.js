import React, {Component} from 'react';

import UserInfoComponent from './UserInfoComponent';
import InvoiceDateComponent from './InvoiceDateComponent';
import InvoiceLineItemsComponent from './InvoiceLineItemsComponent';

import '../style/AddInvoiceContainer.css';

/**
 * React component which is actually a container component. Component would be
 * responsible for holding initial Application state tree and rendering the
 * child components. Note that we handle state updates at this component level
 * and drive the update down the chain.
 */
class AddInvoiceContainer extends Component {

    /**
     * Constructor method which would be hilding the initial state of the
     * application. Please note that we do have the handler methods for
     * updating the state at the parent level and cascase down the updated state
     * to required child components.
     * @see handleLineItemDescriptionChange()
     * @see handleLineItemAmountChange()
     * @see handleNewLineItemAddition
     */
    constructor(props) {
        super(props);
        this.nextLineItemID = 0;
        this.state = {
            userInfo: {
                userName: '',
                userEmail: ''
            },
            dueDate: '',
            lineItems: [
                {
                    id: this.nextLineItemID,
                    invoiceDescription: 'Default description',
                    invoiceAmount: '100'
                }
            ]
        };

        this.handleLineItemDescriptionChange = this.handleLineItemDescriptionChange.bind(this);
        this.handleLineItemAmountChange = this.handleLineItemAmountChange.bind(this);
        this.handleNewLineItemAddition = this.handleNewLineItemAddition.bind(this);
    }

    /**
     * Handler method to update the state when a description is changed for
     * a particular line item. Event would be fired at LineItemComponent level.
     *
     * We would match the 'id' of a particular lineItem with the data from event,
     * before updating the state.
     * @param event Event object cascaded up from LineItemComponent component.
     */
    handleLineItemDescriptionChange(event) {
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

    /**
     * Handler method to update the state when an amount is changed for
     * a particular line item. Event would be fired at LineItemComponent level.
     *
     * We would match the 'id' of a particular lineItem with the data from event,
     * before updating the state.
     * @param event Event object cascaded up from LineItemComponent component.
     */
    handleLineItemAmountChange(event) {
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

    /**
     * Handler method to update the state with a new lineItem entry when user
     * wishes to add a new line item. Event would be fired at InvoiceLineItemsComponent.
     *
     * Prior update, we should create a lineItem entry.
     */
    handleNewLineItemAddition() {
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

    /**
     * Sub-render method to render InvoiceLineItemsComponent.
     * Note that we have handlers for all specific actions related to component
     * and LineItemComponent too.
     */
    renderInvoiceLineItems() {
        return (
            <InvoiceLineItemsComponent
                lineItems={this.state.lineItems}
                onLineItemDescriptionChange={this.handleLineItemDescriptionChange}
                onLineItemAmountChange={this.handleLineItemAmountChange}
                onNewLineItemAddition={this.handleNewLineItemAddition}
            />
        );
    }

    /**
     * Render method which would render UserInfoComponent, InvoiceDateComponent
     * and InvoiceLineItemsComponent.
     */
    render() {
        return (
            <div className='invoice-container'>
                <p>AddInvoiceContainer component at uber level.</p>
                <UserInfoComponent />
                <InvoiceDateComponent />
                {this.renderInvoiceLineItems()}
                <input type='button' value='Send Invoice' name='sendInvoice' />
            </div>
        );
    }
}

export default AddInvoiceContainer;
