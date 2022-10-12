import React, { useContext } from 'react';
import './feedback-stats.style.css';

// Context
import FeedbackContext from '../../context/feedback.context';

const FeedbackStats = () => {
    const { feedbacks } = useContext(FeedbackContext);

    // Private methods //////////////////////////////////////////////////////
    const averageRating = feedbacks.reduce((prev, current) => {
        return prev += current.rating
    }, 0) / feedbacks.length;

    console.log(averageRating);

    return(
        <div className='feedback-stats'>
            <p className='feedback-stats__review'>{feedbacks.length} Reviews</p>
            <p className='feedback-stats__rating'>Average rating: {averageRating.toFixed(2)}</p>
        </div>
    )
}

export default FeedbackStats;