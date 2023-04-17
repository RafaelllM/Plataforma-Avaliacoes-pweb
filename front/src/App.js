import './App.css';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
      <section id="register">
        <div className="box-text-field">
          <h1>Online<span className='color-exam'>Exam</span></h1>
          <TextForm/>
        </div>
      </section>
    </div>
  );
}

export default App;
