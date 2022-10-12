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
            return state;
        default:
            return state;
    }
}