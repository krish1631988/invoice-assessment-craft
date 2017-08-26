import React, {Component} from 'react';

import UserInfoComponent from './UserInfoComponent';
import InvoiceDateComponent from './InvoiceDateComponent';
import InvoiceLineItemsComponent from './InvoiceLineItemsComponent';

import '../style/AddInvoiceContainer.css';

class AddInvoiceContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='invoice-container'>
                <p>AddInvoiceContainer component at uber level.</p>
                <UserInfoComponent />
                <InvoiceDateComponent />
                <InvoiceLineItemsComponent />
                <input type='button' value='Send Invoice' name='sendInvoice' />
            </div>
        );
    }
}

export default AddInvoiceContainer;
