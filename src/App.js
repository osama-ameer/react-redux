import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { CounterDisplay } from './components/CounterDisplay';

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterDisplay />
    </div>
  );
}

export default App;
