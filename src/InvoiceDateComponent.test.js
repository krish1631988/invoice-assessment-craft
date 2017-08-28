import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

import InvoiceDateComponent from '../src/components/InvoiceDateComponent';

it('InvoiceDateComponent renders without any problem', () => {
    const dueDate = new Date();
    mount(<InvoiceDateComponent dueDate={dueDate}/>);
});
