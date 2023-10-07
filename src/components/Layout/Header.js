import React, { Fragment } from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import HeaderLoginButton from './HeaderLoginButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals Order</h1>
        <div className={classes.button}>
          <HeaderCartButton onClick={props.onShownCart} />
          <HeaderLoginButton onClick={props.onShownCart}/>
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
