
const initialState = {
    currentMode : 'VIEW_MODE',
    comments: []
};

export const comments = (state = initialState, action) => {

    let addComment = (comment) => {
        // Add the date
        comment.date = new Date();

        // If there already are comments in local storage
        if(localStorage.getItem('comments') !== undefined && localStorage.getItem('comments') !== null){
            localStorage.setItem('comments', localStorage.getItem('comments').push(comment));
        } else {
            // Otherwise create the local storage comments
            let comments = [comment];
            localStorage.setItem('comments', comments);
        }

        return 'VIEW_MODE'
    };

    switch(action.type){

        case 'ADD_COMMENT':
            return {
                ...state,
                currentMode : addComment(action)
            }

        case 'VIEW_MODE':
            return {
                ...state,
                currentMode : 'VIEW_MODE'
            }

        case 'COMMENT_MODE':
            return {
                ...state,
                currentMode : 'COMMENT_MODE'
            }

        default :
            return state;
    }
}