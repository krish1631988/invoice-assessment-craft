import React, {Component} from 'react';

/**
 * InvoiceDateComponent to be responsible for handling and adding dates to invoice.
 */
class InvoiceDateComponent extends Component {
    constructor(props) {
        super(props);

        this.handleDueDateChange = this.handleDueDateChange.bind(this);
    }

    /**
     * Handler method to handle changes done by selecting new date.
     * @param event Event object.
     */
    handleDueDateChange(event) {
        this.props.onDueDateChange(event);
    }

    /**
     * Sub-render method to render due date field.
     * @see handleDueDateChange()
     */
    renderDueDateField() {
        return (
            <input
                type='date'
                name='invoiceDate'
                value={this.props.dueDate}
                onChange={this.handleDueDateChange}
            />
        );
    }

    /**
     * Render method to render InvoiceDateComponent.
     * @see renderDueDateField()
     */
    render() {
        return (
            <div>
                {`Due Date:    `}
                {this.renderDueDateField()}
            </div>
        );
    }
}

export default InvoiceDateComponent;
