import React from 'react';

// Components
import FeedbackItem from './feedback-item/feedback-item.component';

// Context

const FeedbackList = () => {
    return(
        <div className='feedback-list'>
            {data.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default FeedbackList;