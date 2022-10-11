import React from 'react';
import './feedback-item.style.css';

const FeedbackItem = ({ item }) => {
    return(
        <div className='feedback-item'>
            <div className='feedback-item__rate'>{item.rating}</div>
            <div className='feedback-item__buttons'>
                <button>edit</button>
                <button>delete</button>
            </div>
            <p className='feedback-item__text'>
                { item.text }
            </p>
        </div>
    )
}

export default FeedbackItem;