import React, { createContext, useEffect, useReducer } from "react";

// Reducer & Actions
import { feedbackReducer } from '../context/feedback.reducer';
import { fetchFeedback } from '../context/feedback.actions';

const FeedbackContext = createContext();

export const FeedbackProvider = ( {children} ) => {
    const initialState = {
        feedbacks: [],
        feedback: {
            item: null,
            isEditing: false
        }
    }
    const [state, dispatch] = useReducer(feedbackReducer, initialState);

    useEffect(() => {
        getFeedbackData();
    },[]);

    // Private methods
    const getFeedbackData = async () => {
        const feedbackData = await fetchFeedback();
        dispatch({
            type: 'GET_FEEDBACKS',
            payload: feedbackData
        });
    }


    return(
        <FeedbackContext.Provider value={{
            ...state,
            dispatch
        }}>
            { children }
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;