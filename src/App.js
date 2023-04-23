import './App.css';
import {useState} from 'react';

function App() {
  const [color, setColor] = useState('red')
  return (
    <div className="App">
      <header className="App-header">
        <input type="color" onChange={(e) => {
          setColor(e.target.value);
        }} />
        <h3 style={{
          color: `${color}`
        }}>bla bla</h3>
      </header>
    </div>
  );
}

export default App;
