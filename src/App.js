import React from 'react';
import FeedbackList from './components/feedback-list/feedback-list.component';

// Components
import Header from './components/shared/header.component';

const App = () => {
    return(
        <>
            <Header />
            <div className='container'>
                <FeedbackList />
            </div>
        </>
     
    )
}

export default App;