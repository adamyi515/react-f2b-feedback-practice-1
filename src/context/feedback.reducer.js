export const feedbackReducer = (state, action) => {
    switch(action.type){
        case 'GET_FEEDBACKS':
            return {
                ...state,
                feedbacks: action.payload
            }
        case 'ADD_FEEDBACK':
            return {
                ...state,
                feedbacks: [...state.feedbacks, action.payload]
            }
        case 'DELETE_FEEDBACK':
            return {
                ...state,
                feedbacks: state.feedbacks.filter((feedback) => feedback.id !== action.payload)
            }
        case 'EDIT_FEEDBACK':
            return {
                ...state,
                feedback: {
                    ...state.feedback,
                    item: action.payload,
                    isEditing: true
                }
            }
        case 'UPDATE_FEEDBACK':
            return {
                ...state,
                feedback: {
                    isEditing: false,
                    item: null
                },
                feedbacks: state.feedbacks.map((item)=> {
                    if(item.id === action.payload.id){
                        return action.payload;
                    } else {
                        return item;
                    }
                })
            };
        default:
            return state;
    }
}