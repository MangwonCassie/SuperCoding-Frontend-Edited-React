import React from 'react';
import classes from "./Login.module.css"

//rsc 단축키 누르면 자동으로 생기잖아

const Input = (props) => {
    return (
        <div
        className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={props.type}>{props.label}</label>
        <input
          type={props.type}
          id={props.type}
          value={props.emailState.value}
          onChange={props.emailChangeHandler}
          onBlur={prnpops.validateEmailHandler}
          ref={props.emailInputRef}
        />
      </div>
    );
};

export default Input;