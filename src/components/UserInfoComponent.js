import React, {Component} from 'react';

class UserInfoComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    {`Name:    `}
                    <input type='text' name='userName' />
                </div>
                <div>
                    {`Email:    `}
                    <input type='text' name='userEmail' />
                </div>
            </div>
        );
    }
}

export default UserInfoComponent;
