import React from 'react';
import './App.css';
import Question from './components/question';
import Traveler from './images/adventure.svg';
import Winners from './images/winners.svg';

function App() {
  const [counter, setCounter] = React.useState(0)
  const [results, setResults] = React.useState(false)
  const [countries, setCountries] = React.useState([])
  const [country, setCountry] = React.useState({})
  const [question, setQuestion] = React.useState("")
  const [choices, setChoices] = React.useState([])

  React.useEffect(()=>{
   getRandom();
  }, [])

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  const getRandom = async () => {
    var allCountries = countries
    //fetches countries
    if (countries.length === 0){
      await fetch('https://restcountries.com/v3.1/all')
      .then(response=>response.json())
      .then(result=>{
        allCountries = result
        setCountries(result)
      })
    }
    // picks a random country
    var randomCountry = allCountries[Math.floor(Math.random() * 250)];
    setCountry(randomCountry)
    // picks a random question
    var questions = [
      "Which country does this flag belong to?",
      `${randomCountry.capital} is the capital of what country?`
    ]
    var randomQuestion = questions[Math.floor(Math.random() * 2)] 
    setQuestion(randomQuestion)
    // picks random choices
    var currentChoices = [randomCountry.name.common]
    while(currentChoices.length < 4){
      var random = allCountries[Math.floor(Math.random() * 250)]
      if(!(currentChoices.includes(random.name.common))){
        currentChoices.push(random.name.common)
      }
    }
    // shuffle answers
    setChoices(shuffle(currentChoices))
  }
  const increment = () => { setCounter(counter+1)}
  return (
    <div className="App">
      <div>
        <h1 className='title'>Country Quiz</h1>
        {!results && (
          <section className='white-box'>
            <img className="traveler" src={Traveler} alt='traveler man with world globe'/>
            <Question country={country} question={question} choices={choices} increment={increment} getRandom={getRandom} setResults={setResults}/>
          </section>
        )}
        {results && (
          <section className='white-box results'>
            <img className="winners" src={Winners} alt='two winners with a trophy in the middle'/>
            <h1>Results</h1>
            <p>You got <span>{counter}</span> correct answers</p>
            <button onClick={()=>{setCounter(0);setResults(false); getRandom()}}>Try Again</button>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
