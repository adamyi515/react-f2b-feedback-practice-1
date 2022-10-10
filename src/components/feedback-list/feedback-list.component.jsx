import React from 'react';

// Components
import FeedbackItem from './feedback-item/feedback-item.component';

// data
import {data} from '../../data/feedback.data';

const FeedbackList = () => {
    return(
        <div className='feedback-list'>
            {data.map((item) => (
                <FeedbackItem item={item} />
            ))}
        </div>
    )
}

export default FeedbackList;