import React, {useState} from 'react';

import './PaymentForm.css';

const PaymentForm = () => {

  const [objectState, setObjectState] = useState({
    name: '',
    price: 0,
    today: new Date(),
  })


  const inputTextHandler = (event) => {
    setObjectState(prevState => ({...prevState, name:event.target.value}))
  }

  const inputPriceHandler  = (event) => {
    setObjectState(prevState => ({...prevState, price:event.target.value}))
  }

  const inputTodayHandler  = (event) => {
      setObjectState(prevState => ({...prevState, today:event.target.value}))
  }

  const buttonEventHandler = (event) => {
    event.preventDefault();
    /*event가 매개변수로 */
    console.log(objectState);

    /*초기값 복사해서 넣어주면 초기화됨 */
    setObjectState({
      name: '',
      price: 0,
      today: new Date(),
    });
  };

 /*테스트 해보면 */
  console.log(objectState); 
  return (
    <form>
      <div className='new-payment__controls'>
        <div className='new-payment__control'>
          <label>이름</label>
          <input type='text'  onChange={inputTextHandler} value={objectState.name}/>
        </div>
        <div className='new-payment__control'>
          <label>금액</label>
          <input type='number' min='0.01' step='0.01'   onChange={inputPriceHandler}
            value={objectState.price}
          />
        </div>
        <div className='new-payment__control'>
          <label>날짜</label>
          <input type='date' min='2019-01-01' max='2023-12-31'  onChange={inputTodayHandler}
          value={objectState.today} />
        </div>
      </div>
      <div className='new-payment__actions'>
        <button type='submit'>결제 추가</button>
      </div>
    </form>
  );
};

export default PaymentForm;
