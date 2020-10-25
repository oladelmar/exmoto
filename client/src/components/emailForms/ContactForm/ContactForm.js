import React from 'react';

import './ContactForm.scss';
import Form from './../../UI/Form/Form';
import Input from './../../UI/Input/Input';

const ContactForm = props => {
   const allInputs = Object.keys(props.elemConfig).map(key => (
      <Input
         key={key}
         elemtype={props.elemConfig[key].elemType} 
         elemConfig={props.elemConfig[key].elemConfig}
         onChangeHandler={event => props.handleChange(event, key)}
         addChangeHandle={true}
         addBlurHandle={false}
         inpStyle='Form-Input'
         defaultValue={props.elemConfig[key].value}
      />
   ))
   return (
      <div className="ContactForm">
         <h3 className="ContactForm__Heading">НАПИСАТЬ НАМ:</h3>
         <Form
            column={true}
            onSubmitHandler={event => props.handleSubmit(event)}
            isValid={props.isValid}
            btnStyle='Button__GreenMarginTop'
            btnCloseStyle="Button__Green"
            formStyle='InvoiceForm'
            completeText='Сообщение отправлено'
            errText='Заполните пустые поля'
            btnText='ОТПРАВИТЬ'
            id={props.id}
         >
            {allInputs}
         </Form>
      </div>
   );
};

export default ContactForm;