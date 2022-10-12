import React, { useState, useContext, useEffect } from 'react';
import './feedback-form.style.css';

// Context
import FeedbackContext from '../../context/feedback.context';

// Actions
import { addFeedback, updateFeedback } from '../../context/feedback.actions'

// Components
import FeedbackRating from './feedback-rating/feedback-rating.component';

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const { feedback, dispatch } = useContext(FeedbackContext);

    useEffect(() => {
        if(feedback.isEditing === true){
            setText(feedback.item.text);
            setRating(feedback.item.rating);
        }
    }, [feedback]);

    // Event Handler methods ///////////////////////////////////////////////
    const handleChange = ev => {
        setText(ev.target.value);
    }

    const handleSubmit = async ev => {
        ev.preventDefault();
        // Execute this only when we're updating existing data.
        if(feedback.isEditing === true){
            const newItem = {
                ...feedback.item,
                text,
                rating
            }
            const updatedFeedbackItemData = await updateFeedback(newItem);
            dispatch({
                type: 'UPDATE_FEEDBACK',
                payload: updatedFeedbackItemData
            })
        }

        // Execute this code when we're adding new feedback.
        if(text !== '' && feedback.isEditing === false){
            const newFeedback = {
                text,
                rating
            }
            const feedback = await addFeedback(newFeedback);
            dispatch({
                type: 'ADD_FEEDBACK',
                payload: feedback
            });
    
            
        } 
        setText('');
    }

    return(
        <div className='form'>
            <h1>How would you rate our service with us?</h1>
            <form onSubmit={handleSubmit}>
                <FeedbackRating rating={rating} selectRating={setRating} />
                <div className='input-group'>
                    <input type='text' name='text' placeholder='Post a feedback...' onChange={handleChange}
                        value={text} />
                    <button type='submit'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default FeedbackForm;