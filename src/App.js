import React from 'react';

// Context
import {FeedbackProvider} from './context/feedback.context';

// Components
import Header from './components/shared/header.component';
import FeedbackList from './components/feedback-list/feedback-list.component';
import FeedbackStats from './components/feedback-stats/feedback-stats.component';
import FeedbackForm from './components/feedback-form/feedback-form.component';

const App = () => {
    return(
        <FeedbackProvider>
            <Header />
            <div className='container'>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
            </div>
        </FeedbackProvider>
     
    )
}

export default App;