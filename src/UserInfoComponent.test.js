import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import {expect} from 'chai';

import UserInfoComponent from '../src/components/UserInfoComponent';

it('UserInfoComponent renders without any problem', () => {
    const userInfo = {
        userName: 'Krish',
        userEmail: 'krish@gmail.com'
    };
    mount(<UserInfoComponent userInfo={userInfo}/>);
});

it('Should call onBlur when clicked on userName field', () => {
    const userInfo = {
        userName: 'Krish',
        userEmail: 'krish@gmail.com'
    };
    const handleUserNameChange = (event) => {
        console.log('I am called');
    };
    const userInfoComponentWrapper = mount(<UserInfoComponent userInfo={userInfo}  onUserNameChange={handleUserNameChange}/>);
    userInfoComponentWrapper.find('input[name="userName"]').simulate('blur');
    expect(
        userInfoComponentWrapper.find('input[name="userName"]').text(),
        'Should have updated value'
    ).to.equal('Krish');
});

it('Should call onBlur when clicked on userEmail field', () => {
    const userInfo = {
        userName: 'Krish',
        userEmail: 'krish@gmail.com'
    };
    const handleUserEmailChange = (event) => {
        console.log('I am called');
    };
    const userInfoComponentWrapper = mount(<UserInfoComponent userInfo={userInfo}  onUserEmailChange={handleUserEmailChange}/>);
    userInfoComponentWrapper.find('input[name="userEmail"]').simulate('blur');
    expect(
        userInfoComponentWrapper.find('input[name="userEmail"]').text(),
        'Should have updated value'
    ).to.equal('krish@gmail.com');
});
