import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';


export class App extends Component {


  render() {

    let defaultComment = {
      commentText: "Test a comment"
    };

    return (
      <div>
        { store.getState().currentMode === 'VIEW_MODE'
            ? <CommentList comments={[defaultComment]} />
            : <CommentInput />
        }
      </div>
    );
  }
}