import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch({type: "toggle"})
  };
  const counter = useSelector((state)=>state.counter);
  const showCounter = useSelector((state)=>state.showCounter);
  const dispatch = useDispatch();


  const incrementHandler = () => {
    dispatch({type: "increment"});
  }

  const decrementHandler = () => {
    dispatch({type: "decrement"});
  }

  const increase10Handler = () => {
    dispatch({type: "increase", amount: 10});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>토글 카운터</button>
      <button onClick={incrementHandler}>증감 카운터</button>
      <button onClick={increase10Handler}>숫자 10 증가 카운터</button>
      <button onClick={decrementHandler}>감소 카운터</button>
    </main>
  );
};

export default Counter;
