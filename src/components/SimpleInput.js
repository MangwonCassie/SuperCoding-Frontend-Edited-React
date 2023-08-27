import { useRef, useState } from "react";

const SimpleInput = (props) => {

  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState(' ');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false); //처음엔 터치 안됐으니 false

 

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    

  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log('enteredName',enteredName )

      //enteredName이 빈 값인 경우 제출 안되게 수정
    if(enteredName.trim() === ""){
      console.log("submit fail")
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    setEnteredName("");
  };


  

  //에러메시지를 보여주는 경우, true - > 메세지노출
  const nameInputIsInValid = !enteredNameIsValid && enteredNameIsTouched

  const nameInputClasses = nameInputIsInValid
  ? "form-contorl invalid"
  : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputIsInValid}>
        <label htmlFor='name'>당신의 이름은?</label>
        <input type='text' 
        id='name' 
        ref={nameInputRef}
        value={enteredName}
        onChange={nameInputChangeHandler}
        />
      {!enteredNameIsValid && (
        <p className="error-text">
        이름값은 빈 값이 아니여야합니다.
        </p>
      )}

      </div>
      <div className="form-actions">
        <button>제출하기</button>
      </div>
    </form>
  );
};

export default SimpleInput;
