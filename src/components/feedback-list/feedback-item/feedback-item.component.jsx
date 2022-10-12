import React, { useContext } from 'react';
import './feedback-item.style.css';

// Context
import FeedbackContext from '../../../context/feedback.context';

// Actions
import { deleteFeedback } from '../../../context/feedback.actions';

const FeedbackItem = ({ item }) => {
    const { dispatch } = useContext(FeedbackContext);

    const handleDelete = ev => {
        if(window.confirm('Are you sure you want to delete?')){
            deleteFeedback(item.id);
            dispatch({
                type: 'DELETE_FEEDBACK',
                payload: item.id
            })
        }
    }

    return(
        <div className='feedback-item'>
            <div className='feedback-item__rate'>{item.rating}</div>
            <div className='feedback-item__buttons'>
                <button>edit</button>
                <button onClick={handleDelete}>delete</button>
            </div>
            <p className='feedback-item__text'>
                { item.text }
            </p>
        </div>
    )
}

export default FeedbackItem;