import React from 'react';


export default function Question({country, question, choices}){
    const [answered, setAnswered] = React.useState(false)

    const checkAnswer = (event) => {
        setAnswered(true)
        console.log(event)
        if(event.target.innerHTML === country.name.common){
            console.log('correct')
        } else {
            event.target.classList.add("choice", "red")
        }
        // disable all choices
    }
    return(
        <div className='question-grid'>
            {/* <span class="material-icons">check_circle_outline</span>
            <span class="material-icons">highlight_off</span> */}
            <h2>{question}</h2>
            {choices.map((choice, key) => {
                return(
                    <div id={key} className={answered && choice===country.name.common ? 'choice green' : 'choice'} onClick={(event) => checkAnswer(event)}>
                        <p>{choice}</p>
                    </div>
                )
            })}
        </div>
    )
}