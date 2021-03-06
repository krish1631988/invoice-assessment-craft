import React, { Component } from 'react';

import '../style/LineItemComponent.css';

/**
 * LineItemComponent that would be responsible only to present a line item
 * in UI.
 */
class LineItemComponent extends Component {
    constructor(props) {
        super(props);

        this.handleDescriptionTextChange = this.handleDescriptionTextChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
    }

    /**
     * Handler method to handle value changes onBlur of description field.
     * Cascade the event up the chain.
     * @param event Event object emitted by onBlur of the description field.
     */
    handleDescriptionTextChange(event) {
        this.props.onDescriptionTextChange(event);
    }

    /**
     * Handler method to handle value changes onBlur of amount field.
     * Cascade the event up the chain.
     * @param event Event object emitted by onBlur of the amount field.
     */
    handleAmountChange(event) {
        this.props.onAmountChange(event);
    }

    /**
     * Sub-render method to render description field.
     * @see handleDescriptionTextChange()
     */
    renderDescriptionField() {
        return (
            <input
                id={this.props.id}
                className='description-field'
                type='text'
                name='desctiptionText'
                defaultValue={this.props.invoiceDescription}
                onBlur={this.handleDescriptionTextChange}
            />
        );
    }

    /**
     * Sub-render method to render amount field.
     * @see handleAmountChange()
     */
    renderAmountField() {
        return (
            <input
                id={this.props.id}
                className='amount-field'
                type='text'
                name='invoiceAmt'
                defaultValue={this.props.invoiceAmount}
                onBlur={this.handleAmountChange}
            />
        );
    }

    /**
     * Render method to render both Description and Amount field.
     * @see renderDescriptionField()
     * @see renderAmountField()
     */
    render() {
        return (
            <div className='line-item'>
                <table>
                    {
                        this.props.id === 0 &&
                        <tr>
                            <th><label className='description-label'>{`Description`}</label></th>
                            <th><label className='amount-label'>{`Amount`}</label></th>
                        </tr>
                    }
                    <tr>
                        <td>{this.renderDescriptionField()}</td>
                        <td>{this.renderAmountField()}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default LineItemComponent;
