import React from 'react';

export default function Question(){
    return(
        <div className='question-grid'>
            <h2>Cairo is the capital of:</h2>
            <div className='choice right'>
                <p>Answer #1</p>
                <span class="material-icons">check_circle_outline</span>
            </div>
            <div className='choice'>
                <p>Answer #2</p>
                <span></span>
            </div>
            <div className='choice'>
                <p>Answer #3</p>
                <span></span>
            </div>
            <div className='choice wrong'>
                <p>Answer #4</p>
                <span class="material-icons">highlight_off</span>
            </div>
        </div>
    )
}