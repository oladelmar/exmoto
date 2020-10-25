import React from 'react';

import styles from './Form.module.scss';
import Button from './../Button/Button';

const Form = props => {
   return (
      <form id={props.id} className={ props.column ? [styles.Form, styles.FormColumn].join(' ') : styles.Form} onSubmit={event => props.onSubmitHandler(event)}>  
         <div className={styles[props.formStyle]}>
            {props.children}
            <p className={props.isValid ? styles.FormBox__Error : [styles.FormBox__Error,
               styles.FormBox__Error__Active].join(' ')}>
               {props.errText}
            </p>
         </div>
         <Button btnStyle={props.btnStyle}>{props.btnText}</Button>   
   </form>
   );
}

export default Form;
