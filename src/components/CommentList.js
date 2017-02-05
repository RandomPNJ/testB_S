import React, { Component, PropTypes } from 'react';
import Comment from './Comment';

export class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.Object.isRequired
    }



    render() {

        const comments = this.props;
        return (
            <ul class="list-group">
                { comments.map(comment =>
                    <Comment commentText={comment}/>
                )}
            </ul>
        )
    }
}
