import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={()=>dispatch({type:'INCREMENT'})}>Increase</button>
      <span>{counter}</span>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrease</button>
    </div>
  );
}

export default App;
