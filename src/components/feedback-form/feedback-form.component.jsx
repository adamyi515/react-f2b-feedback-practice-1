import React, { useState, useContext } from 'react';
import './feedback-form.style.css';

// Context
import FeedbackContext from '../../context/feedback.context';

// Actions
import { addFeedback } from '../../context/feedback.actions'

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const { dispatch } = useContext(FeedbackContext);

    const handleChange = ev => {
        setText(ev.target.value);
    }

    const handleSubmit = async ev => {
        ev.preventDefault();
        const newFeedback = {
            text,
            rating: 5
        }
        const feedback = await addFeedback(newFeedback);
        dispatch({
            type: 'ADD_FEEDBACK',
            payload: feedback
        });

        setText('');
    }

    return(
        <div className='form'>
            <h1>How would you rate our service with us?</h1>
            <form onSubmit={handleSubmit}>
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