import './App.css';
import { useState, useEffect } from 'react';

let Buttons = () => {
  const [count, setCount] = useState(0);

  function incrementarClick() {
    setCount((prevValue) => prevValue + 1);
  }
  
  function decrementarClick() {
    if (count > 0) {
      setCount((prevValue) => prevValue - 1);
    } else {
      setCount(0);
    }
  }

  function resetClick() {
    setCount(0);
  }

  
  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]); // Se ejecuta cada vez que 'count' cambia

  return (
    <>
      <div className='contador'>
        <p>{count}</p> 
      </div>

      <div className='botones'>
        <button onClick={incrementarClick}>
          Aumentar
        </button>
        <button onClick={decrementarClick}>
          Decrementar
        </button>
        <button onClick={resetClick}>
          Restablecer
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Buttons />
    </div>
  );
}

export default App;