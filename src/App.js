import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, GET_DATA } from './actions';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter.counter);
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="App">
        <button onClick={() => dispatch(INCREMENT())}>Increase</button>
        <span>{counter}</span>
        <button onClick={() => dispatch(DECREMENT())}>Decrease</button>
      </div>
      <div  className="App">
        <button onClick={() => dispatch(GET_DATA())}>Get Data</button>
        <p>{JSON.stringify(data)}</p>
      </div>
    </div>
  );
}

export default App;
