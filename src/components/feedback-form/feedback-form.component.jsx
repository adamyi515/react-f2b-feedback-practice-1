import React, { useState } from 'react';
import './feedback-form.style.css';

const FeedbackForm = () => {
    const [text, setText] = useState('');

    const handleChange = ev => {
        setText(ev.target.value);
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        
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