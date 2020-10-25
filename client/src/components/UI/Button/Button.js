import React from 'react';
import styles from './Button.module.scss';

const button = props => (
   <button 
      type="submit" 
      className={[styles.Button, styles[props.btnStyle]].join(' ')} 
      onClick={props.handleClick}
   >
      <span>
       {props.children}
      </span>
   </button>
);

export default button;