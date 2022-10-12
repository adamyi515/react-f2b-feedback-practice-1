import React, { useState, useEffect } from 'react';
import './feedback-rating.style.css';

const FeedbackRating = ({ selectRating, rating }) => {
    const [numSelected, setNumSelected] = useState(10);

    useEffect(() => {
        setNumSelected(rating);
    }, [rating]);


    // Event Handlers /////////////////////////////////////////////////////
    const handleSelect = ev => {
        setNumSelected(+ev.target.value);
        selectRating(+ev.target.value);
    }

    return(
        <ul className='feedback-rating'>
            <li>
                <input id='num1' type='radio' value='1' checked={numSelected === 1} onChange={handleSelect} />
                <label htmlFor='num1'>1</label>
            </li>
            <li>
                <input id='num2' type='radio' value='2' checked={numSelected === 2} onChange={handleSelect} />
                <label htmlFor='num2'>2</label>
            </li>
            <li>
                <input id='num3' type='radio' value='3' checked={numSelected === 3} onChange={handleSelect} />
                <label htmlFor='num3'>3</label>
            </li>
            <li>
                <input id='num4' type='radio' value='4' checked={numSelected === 4} onChange={handleSelect} />
                <label htmlFor='num4'>4</label>
            </li>
            <li>
                <input id='num5' type='radio' value='5' checked={numSelected === 5} onChange={handleSelect} />
                <label htmlFor='num5'>5</label>
            </li>
            <li>
                <input id='num6' type='radio' value='6' checked={numSelected === 6} onChange={handleSelect} />
                <label htmlFor='num6'>6</label>
            </li>
            <li>
                <input id='num7' type='radio' value='7' checked={numSelected === 7} onChange={handleSelect} />
                <label htmlFor='num7'>7</label>
            </li>
            <li>
                <input id='num8' type='radio'  value='8' checked={numSelected === 8} onChange={handleSelect}/>
                <label htmlFor='num8'>8</label>
            </li>
            <li>
                <input id='num9' type='radio' value='9' checked={numSelected === 9} onChange={handleSelect} />
                <label htmlFor='num9'>9</label>
            </li>
            <li>
                <input id='num10' type='radio' value='10' checked={numSelected === 10} onChange={handleSelect} />
                <label htmlFor='num1'>10</label>
            </li>
        </ul>
    )
}

export default FeedbackRating;