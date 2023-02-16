import logo from './logo.svg';
import './App.css';

function App() {
  const testFunction = async () => {
    const response = await  fetch('/test_route');
    
  }
  testFunction()
  return (
    <div className="App">
      <h1> Portfolio, Here were go!</h1>
    </div>
  );
}

export default App;