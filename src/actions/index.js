import * as types  from '../constants/ActionTypes';

let commentId = 0;

export const addComment = (comment) => {
  return {
      type: types.ADD_COMMENT,
      id: commentId++,
      comment: comment
  }
}


export const viewMode = mode => {
    return {
        type: types.VIEW_MODE
    }
}


export const commentMode = mode => {
    return {
        type: types.COMMENT_MODE
    }
}

