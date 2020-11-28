import React, {useState} from 'react'

function computeInitialCounter() {
    console.log("Some calculations...");
    return Math.trunc(Math.random() * 20);
  }
  

const state = () => (
     // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitialCounter());
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: "Счетчик",
    date: Date.now(),
  });

  function increment() {
    // setCounter(counter + 1);
    setCounter((prevState) => {
      return prevState + 1;
    });
    // setCounter(prev => prev + 1)
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState(prev => {
      return {...prev, title: 'New title'}
    })
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Убрать
      </button>
      <button
        onClick={updateTitle}
        className="btn btn-primary"
      >
        Изменить название
      </button>
      <pre>{JSON.stringify(state, null, " ")}</pre>
    </div>
  );
);

export default state;