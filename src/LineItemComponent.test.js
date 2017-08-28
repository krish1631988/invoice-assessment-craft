import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

import LineItemComponent from '../src/components/LineItemComponent';

it('LineItemComponent renders without any problem', () => {
    const lineItem = {
        id: 0,
        invoiceDescription: 'Test description',
        invoiceAmount: '100'
    };
    mount(
        <LineItemComponent
            id={lineItem.id}
            invoiceDescription={lineItem.invoiceDescription}
            invoiceAmount={lineItem.invoiceAmount}
        />
    );
});
