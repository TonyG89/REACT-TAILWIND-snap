import './App.css';
import Wrapper from './components/Wrapper'
import Header from './blocks/Header'

function App() {
  return (
    <Wrapper>
      <Header/>
      <div className="App">
        <h1 className='text-3xl font-bold underline'>hello world</h1>
      </div>
    </Wrapper>
  );
}

export default App;
