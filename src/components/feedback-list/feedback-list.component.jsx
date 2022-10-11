import React, { useContext } from 'react';

// Components
import FeedbackItem from './feedback-item/feedback-item.component';

// Context
import FeedbackContext from '../../context/feedback.context';

const FeedbackList = () => {
    const { feedbacks } = useContext(FeedbackContext);


    return(
        <div className='feedback-list'>
            {feedbacks.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default FeedbackList;