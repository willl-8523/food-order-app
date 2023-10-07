import React from 'react';
import classes from './HeaderCartButton.module.css';

const HeaderLoginButton = (props) => {
  const btnClasses = `${classes.button} ${classes.login}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span>Login</span>
    </button>
  );
};

export default HeaderLoginButton;
