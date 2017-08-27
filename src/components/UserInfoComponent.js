import React, {Component} from 'react';

import '../style/UserInfoComponent.css';

/**
 * UserInfoComponent would be responsible to present user information fields.
 */
class UserInfoComponent extends Component {

    constructor(props) {
        super(props);

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleUserEmailChange = this.handleUserEmailChange.bind(this);
    }

    /**
     * Handler method to handle change on userName field.
     * @param event Event object.
     */
    handleUserNameChange(event) {
        this.props.onUserNameChange(event);
    }

    /**
     * Handler method to handle change on userEmail field.
     * @param event Event object.
     */
    handleUserEmailChange(event) {
        this.props.onUserEmailChange(event);
    }

    /**
     * Sub-render method to render userName field.
     * @see handleUserNameChange()
     */
    renderUserNameField() {
        return (
            <input
                className='user-name'
                type='text'
                name='userName'
                defaultValue={this.props.userInfo.userName}
                onBlur={this.handleUserNameChange}
            />
        );
    }

    /**
     * Sub-render method to render userEmail field.
     * @see handleUserEmailChange()
     */
    renderUserEmailField() {
        return (
            <input
                className='user-email'
                type='text'
                name='userEmail'
                defaultValue={this.props.userInfo.userEmail}
                onBlur={this.handleUserEmailChange}
            />
        );
    }

    /**
     * Render method to render UserInfoComponent.
     * @see renderUserNameField()
     * @see renderUserEmailField()
     */
    render() {
        return (
            <div>
                <div>
                    {`Name:    `}
                    {this.renderUserNameField()}
                </div>
                <div>
                    {`Email:    `}
                    {this.renderUserEmailField()}
                </div>
            </div>
        );
    }
}

export default UserInfoComponent;
