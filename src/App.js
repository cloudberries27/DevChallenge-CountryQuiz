import './App.css';
import Question from './components/question';
import Traveler from './images/adventure.svg';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className='title'>Country Quiz</h1>
        <section className='white-box'>
          <img className="traveler" src={Traveler} alt='traveler man with world globe'/>
          <Question/>
        </section>
      </div>
    </div>
  );
}

export default App;
