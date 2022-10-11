import React from 'react';
import './feedback-stats.style.css';

const FeedbackStats = () => {
    return(
        <div className='feedback-stats'>
            <p className='feedback-stats__review'>10 Reviews</p>
            <p className='feedback-stats__rating'>Average rating: 4.33</p>
        </div>
    )
}

export default FeedbackStats;