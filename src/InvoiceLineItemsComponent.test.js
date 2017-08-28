import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

import InvoiceLineItemsComponent from '../src/components/InvoiceLineItemsComponent';

it('InvoiceLineItemsComponent renders without any problem', () => {
    const lineItems = [
        {
            id: 0,
            invoiceDescription: 'Test description',
            invoiceAmount: '100'
        }
    ];
    mount(
        <InvoiceLineItemsComponent
            lineItems={lineItems}
        />
    );
});

it('Multiple LineItemComponent get rendered when there are more lineItems', () => {
    const lineItems = [
        {
            id: 0,
            invoiceDescription: 'Test description',
            invoiceAmount: '100'
        },
        {
            id: 1,
            invoiceDescription: 'Test description 2',
            invoiceAmount: '200'
        }
    ];
    const invoiceLineItemsComponentWrapper = mount(
        <InvoiceLineItemsComponent
            lineItems={lineItems}
        />
    );
    expect(invoiceLineItemsComponentWrapper.find('LineItemComponent')).to.have.length(2);
});

it('Should render "+" button to add more lineItems', () => {
    const lineItems = [
        {
            id: 0,
            invoiceDescription: 'Test description',
            invoiceAmount: '100'
        }
    ];
    const invoiceLineItemsComponentWrapper = mount(
        <InvoiceLineItemsComponent
            lineItems={lineItems}
        />
    );
    expect(invoiceLineItemsComponentWrapper.find('button')).to.have.length(1);
});
