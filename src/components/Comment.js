import React, { Component, PropTypes } from 'react';


export class Comment extends Component {
    static propTypes = {
        commentText: PropTypes.object.isRequired
    }



    render() {
        return (
            <li class="list-group-item">
                {this.props}
            </li>
        )
    }
}
