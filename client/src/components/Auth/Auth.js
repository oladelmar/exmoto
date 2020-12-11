import React, { useState, useContext, useCallback } from 'react';

import './Auth.scss';
import Button from './../UI/Button/Button';
import Input from './../UI/Input/Input';
import axios from './../../axios-order';
import { AuthContext } from '../context/Auth-Context';
import { createInputConfig } from './../../helper/helper';

const Auth = props => {
   const [authConfig, setAuthConfig] = useState({
      inputConfig: {
         username: createInputConfig('input', 'text', 'Логин', '', ''),
         password: createInputConfig('input', 'password', 'Пароль', '', '')   
      },
      errorText: {
         emptyFields: 'Заполните пустые поля',
         wrongFields: 'Неверно введены Пароль или Логин',
      },
      displayErrorText: '',
      isValid: true
   });

   const authContext = useContext(AuthContext);
   const handleChange = useCallback((e, id) => {
      const cloneInputConfig = {...authConfig.inputConfig};
      cloneInputConfig[id].value = e.target.value 
      setAuthConfig(prevState => ({
         ...prevState,
         inputConfig: {
            ...cloneInputConfig
         }
      }));
   }, [authConfig.inputConfig]);
   const handleAuth = e => {
      e.preventDefault();
      let status = true;
      for(let val in authConfig.inputConfig) {
         if (authConfig.inputConfig[val].value === '') {
            status = false;
         }
      }
      setAuthConfig(prevState => ({
         ...prevState,
         isValid: status,
         displayErrorText: authConfig.errorText.emptyFields,
      }));

      if (status) {
        const order = {};
        for(let val in authConfig.inputConfig) {
           order[val] = authConfig.inputConfig[val].value;
        }
        axios.post('/users/login', order)
        .then(response => {
           sessionStorage.setItem('access__token', response.data.access_token);
           authContext.login(true);
        })
        .catch(error => {
              setAuthConfig(prevState => ({
               ...prevState,
               isValid: false,
               displayErrorText: authConfig.errorText.wrongFields
            }));
        })
      }
      // authContext.login(status);
   };

   const inputs = Object.keys(authConfig.inputConfig).map(inp => (
         <Input
            key={inp}
            onChangeHandler={(event) => handleChange(event, inp)}
            addChangeHandle={true}
            elemtype={authConfig.inputConfig[inp].elemType}
            elemConfig={authConfig.inputConfig[inp].elemConfig}
            inpStyle='Auth-Form-Input'
            add={false}
            autoComplete={'on'}
         />
   ));
   return (
      <div className="Auth">
         <form className="Auth-Form" onSubmit={event => handleAuth(event)}>
            { inputs }          
            <span className={authConfig.isValid ? "Auth-Form__Error" :  "Auth-Form__Error Auth-Form__Error--Active"}>{authConfig.displayErrorText}</span>
            <Button btnStyle="Button__Green">ВОЙТИ</Button>
         </form> 
      </div>
   );
}

export default Auth;
