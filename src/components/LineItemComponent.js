import React, { Component } from 'react';

class LineItemComponent extends Component {
    render() {
        return (
            <div id={this.props.id}>
                {`Description:    `}
                <input type='text' name='desctiptionText' value={this.props.invoiceDescription} />
                {`Amount:    `}
                <input type='text' name='invoiceAmt' value={this.props.invoiceAmount}/>
            </div>
        );
    }
}

export default LineItemComponent;
