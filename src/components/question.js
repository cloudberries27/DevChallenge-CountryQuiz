import React from 'react';


export default function Question({country, question, choices, increment, getRandom, setResults}){
    const [answered, setAnswered] = React.useState(false)
    const [finish, setFinish] = React.useState(false)

    const checkAnswer = (event) => {
        setAnswered(true)
        if(event.currentTarget.firstChild.innerHTML === country.name.common){
            increment()
        } else {
            event.currentTarget.classList.add("choice", "red")
            event.currentTarget.lastChild.innerText = "highlight_off"
            setFinish(true)
        }
        // disable all choices
    }
    return(
        <div className='question-grid'>
            {question==="Which country does this flag belong to?" && (
                <img  style={{width: '100px', border: '1px solid black'}} src={country.flags.png} alt="country flag"/>
            )}
            <h2>{question}</h2>
            {choices.map((choice, key) => {
                return(
                    <div id={key} className={answered && choice===country.name.common ? 'choice green' : 'choice'} onClick={(event) => checkAnswer(event)}>
                        <p>{choice}</p>
                        <span className="material-icons">
                            {answered && choice ===country.name.common && 'check_circle_outline'}
                        </span>
                    </div>
                )
            })}
            <div className='question-footer'>
                {answered && !finish && (
                    <button className='next-button' onClick={()=>{setAnswered(false);getRandom()}}>Next</button>
                )}
                {answered && finish && (
                    <button className='next-button' onClick={()=>setResults(true)}>Next</button>
                )}
            </div>
            
        </div>
    )
}