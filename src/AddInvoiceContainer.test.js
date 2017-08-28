import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

import AddInvoiceContainer from '../src/components/AddInvoiceContainer';
import { convertDateToRequiredFormat } from './util/date_utils';

it('AddInvoiceContainer renders without any problem', () => {
    const addInvoiceContainerWrapper = mount(
        <AddInvoiceContainer />
    );
});

it('AddInvoiceContainer renders with required child components', () => {
    const addInvoiceContainerWrapper = mount(
        <AddInvoiceContainer />
    );
    addInvoiceContainerWrapper.setState({
        userInfo: {
            userName: 'Krish',
            userEmail: 'krish@gmail.com'
        },
        dueDate: convertDateToRequiredFormat(new Date()),
        lineItems: [
            {
                id: 0,
                invoiceDescription: 'Test Description',
                invoiceAmount: '100'
            }
        ],
        invoiceSent: false,
        showErrorMessage: false
    });
    expect(addInvoiceContainerWrapper.find('UserInfoComponent')).to.have.length(1);
    expect(addInvoiceContainerWrapper.find('InvoiceDateComponent')).to.have.length(1);
    expect(addInvoiceContainerWrapper.find('InvoiceLineItemsComponent')).to.have.length(1);
    expect(addInvoiceContainerWrapper.find('button.send-invoice-btn')).to.have.length(1);
});

it('AddInvoiceContainer renders a read-only Total displaying total in lineItems', () => {
    const addInvoiceContainerWrapper = mount(
        <AddInvoiceContainer />
    );
    addInvoiceContainerWrapper.setState({
        userInfo: {
            userName: 'Krish',
            userEmail: 'krish@gmail.com'
        },
        dueDate: convertDateToRequiredFormat(new Date()),
        lineItems: [
            {
                id: 0,
                invoiceDescription: 'Test Description',
                invoiceAmount: '100'
            },
            {
                id: 1,
                invoiceDescription: 'Test Description 2',
                invoiceAmount: '200'
            }
        ],
        invoiceSent: false,
        showErrorMessage: false
    });
    expect(addInvoiceContainerWrapper.find('span.total-span')).to.have.length(1);
    expect(
        addInvoiceContainerWrapper.find('span.total-span').text(),
        'Read only total should get rendered'
    ).to.equal('TOTAL     $300');
});

it('At first render error no error message is shown', () => {
    const addInvoiceContainerWrapper = mount(
        <AddInvoiceContainer />
    );
    addInvoiceContainerWrapper.setState({
        userInfo: {
            userName: 'Krish',
            userEmail: 'krish@gmail.com'
        },
        dueDate: convertDateToRequiredFormat(new Date()),
        lineItems: [
            {
                id: 0,
                invoiceDescription: 'Test Description',
                invoiceAmount: '100'
            },
            {
                id: 1,
                invoiceDescription: 'Test Description 2',
                invoiceAmount: '200'
            }
        ],
        invoiceSent: false,
        showErrorMessage: false
    });
    expect(addInvoiceContainerWrapper.find('span.input-error')).to.have.length(0);
});

it('At first render conformation block is not rendered', () => {
    const addInvoiceContainerWrapper = mount(
        <AddInvoiceContainer />
    );
    addInvoiceContainerWrapper.setState({
        userInfo: {
            userName: 'Krish',
            userEmail: 'krish@gmail.com'
        },
        dueDate: convertDateToRequiredFormat(new Date()),
        lineItems: [
            {
                id: 0,
                invoiceDescription: 'Test Description',
                invoiceAmount: '100'
            },
            {
                id: 1,
                invoiceDescription: 'Test Description 2',
                invoiceAmount: '200'
            }
        ],
        invoiceSent: false,
        showErrorMessage: false
    });
    expect(addInvoiceContainerWrapper.find('div.another-invoice-btn-div')).to.have.length(0);
});

it('Should render error message when userName, userEmail and amount-field is left blank before clicking send invoice button', () => {
    const addInvoiceContainerWrapper = mount(
        <AddInvoiceContainer />
    );
    addInvoiceContainerWrapper.setState({
        userInfo: {
            userName: '',
            userEmail: ''
        },
        dueDate: convertDateToRequiredFormat(new Date()),
        lineItems: [
            {
                id: 0,
                invoiceDescription: 'Test Description',
                invoiceAmount: ''
            }
        ],
        invoiceSent: false,
        showErrorMessage: false
    });
    addInvoiceContainerWrapper.find('button.send-invoice-btn').simulate('click');
    expect(
        addInvoiceContainerWrapper.find('span.input-error').text(),
        'Error message should get rendered'
    ).to.equal('Please make sure to provide valid User Name , User Email. Make sure to have amount entered for every line item.');
});

it('Should render confirmation block when clicking send invoice with all required data', () => {
    const addInvoiceContainerWrapper = mount(
        <AddInvoiceContainer />
    );
    addInvoiceContainerWrapper.setState({
        userInfo: {
            userName: 'Krish',
            userEmail: 'krish@gmail.com'
        },
        dueDate: convertDateToRequiredFormat(new Date()),
        lineItems: [
            {
                id: 0,
                invoiceDescription: 'Test Description',
                invoiceAmount: '100'
            }
        ],
        invoiceSent: true,
        showErrorMessage: false
    });
    expect(addInvoiceContainerWrapper.find('div.another-invoice-btn-div')).to.have.length(1);
});

it('Should render invoice widgets again when clicked on Add another Invoice button', () => {
    const addInvoiceContainerWrapper = mount(
        <AddInvoiceContainer />
    );
    addInvoiceContainerWrapper.setState({
        userInfo: {
            userName: 'Krish',
            userEmail: 'krish@gmail.com'
        },
        dueDate: convertDateToRequiredFormat(new Date()),
        lineItems: [
            {
                id: 0,
                invoiceDescription: 'Test Description',
                invoiceAmount: '100'
            }
        ],
        invoiceSent: true,
        showErrorMessage: false
    });
    expect(addInvoiceContainerWrapper.find('div.another-invoice-btn-div')).to.have.length(1);
    addInvoiceContainerWrapper.find('button.another-invoice-btn').simulate('click');
    expect(addInvoiceContainerWrapper.find('InvoiceLineItemsComponent')).to.have.length(1);
});
