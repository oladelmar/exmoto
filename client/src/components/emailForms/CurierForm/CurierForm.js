import React from 'react';

// import './ContactForm.scss';
import Form from './../../UI/Form/Form';
import Input from './../../UI/Input/Input';
import { useTranslation } from 'react-i18next';

const CurierForm = props => {
   const { t } = useTranslation();

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
         <h3 className="ContactForm__Heading">{t('ЗАКАЗАТЬ КУРЬЕРА')}:</h3>
         <Form
            column={true}
            onSubmitHandler={event => props.handleSubmit(event)}
            isValid={props.isValid}
            btnStyle='Button__GreenMarginTop'
            btnCloseStyle="Button__Green"
            formStyle='InvoiceForm'
            completeText={t('Сообщение отправлено')}
            errText={t('Заполните пустые поля')}
            btnText={t('ОТПРАВИТЬ')}
            id={props.id}
         >
            {allInputs}
         </Form>
      </div>
   );
};

export default CurierForm;