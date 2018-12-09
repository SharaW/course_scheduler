import React, { Component } from 'react';
import Icon from './icon';

 class Action extends Component {
    render() {
        return (
            <button onClick={`${this.props.className} action`}>
                { Icon('fas fa-plus-circle') }
                {/* fas fa-times-circle */}
            </div>
        )
    }
}
 export default Action; 