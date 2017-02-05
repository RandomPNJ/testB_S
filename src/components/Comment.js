import React, { Component, PropTypes } from 'react';


export class Comment extends Component {
    static propTypes = {
        username: PropTypes.String.isRequired,
        email: PropTypes.String,
        commentText: PropTypes.String.isRequired,
        date: PropTypes.Date.isRequired
    }



    render() {
        return (
            <li class="list-group-item">
                {this.props}
            </li>
        )
    }
}
