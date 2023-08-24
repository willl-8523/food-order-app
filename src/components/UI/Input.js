import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* {...props.input} ajouter toutes les propriétés de l'objet input */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
