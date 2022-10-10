import React from 'react';
import './feedback-item.style.css';

const FeedbackItem = ({ item }) => {
    return(
        <div className='feedback-item'>
            <div className='feedback-rate'>{item.rating}</div>
            <div className='feedback-buttons'>
                <button>edit</button>
                <button>delete</button>
            </div>
            <p className='feedback-text'>
                { item.text }
            </p>
        </div>
    )
}

export default FeedbackItem;