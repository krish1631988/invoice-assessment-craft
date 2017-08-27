import React, {Component} from 'react';

class InvoiceDateComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {`Due Date:    `}
                <input type='date' name='invoiceDate' />
            </div>
        );
    }
}

export default InvoiceDateComponent;
