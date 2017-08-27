import React, { Component } from 'react';

class LineItemComponent extends Component {
    constructor(props) {
        super(props);
        this.handleDescriptionTextChange = this.handleDescriptionTextChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
    }

    handleDescriptionTextChange(event) {
        this.props.onDescriptionTextChange(event);
    }

    handleAmountChange(event) {
        this.props.onAmountChange(event);
    }

    render() {
        return (
            <div id={this.props.id}>
                {`Description:    `}
                <input
                    id={this.props.id}
                    type='text'
                    name='desctiptionText'
                    defaultValue={this.props.invoiceDescription}
                    onBlur={this.handleDescriptionTextChange}
                />
                {`Amount:    `}
                <input
                    id={this.props.id}
                    type='text'
                    name='invoiceAmt'
                    defaultValue={this.props.invoiceAmount}
                    onBlur={this.handleAmountChange}
                />
            </div>
        );
    }
}

export default LineItemComponent;
