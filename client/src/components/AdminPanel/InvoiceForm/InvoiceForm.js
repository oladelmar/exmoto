import  React from 'react';

import './InvoiceForm.scss';
import Input from '../../UI/Input/Input';
import Form from '../../UI/Form/Form';

const InvoiceForm = props => {
   const allInputs = Object.keys(props.formState.invoiceForm).map(inp => {
      return (
         <Input 
            key={inp}
            elemtype={props.formState.invoiceForm[inp].elemType} 
            elemConfig={props.formState.invoiceForm[inp].elemConfig}
            onChangeHandler={(event) => props.changeInputHandler(event, inp)}
            addChangeHandle={true}
            addBlurHandle={false}
            inpStyle='Form-Input'
            disabled={props.formState.invoiceForm[inp].disabled}
            defaultValue={props.formState.invoiceForm[inp].value}
            showCountryBox = {props.formState.invoiceForm[inp].countryBox}
            countries = {props.countries}
            onBlurHandler = {() => props.onBlurHandler(inp)}
            selectCountryHandler = {event => props.selectCountryHandler(event, inp)}
            value = {props.formState.invoiceForm[inp].value}
         />
         );
   });
   return (
      <div className="InvoiceForm-Box" style={{display: props.showForm ? 'block' : 'none'}}>
         <div className="InvoiceForm__Close" onClick={props.closeForm} title="Закрыть"></div>
         <h2 className="InvoiceForm-Box__Header">{props.heading}</h2>
         <Form
            id={'addForm'}
            onSubmitHandler={event => props.formSubmit(event)}
            isValid={props.isValid}
            btnText={props.btnText}
            btnStyle='Button__GreenMarginTop'
            btnCloseStyle="Button__Blue"
            formStyle='InvoiceForm'
            column={true}
            completeText='Накладная успешно добавлена'
            disabled={props.formState.invoiceForm.disabled}
            errText={props.errorText}
         >
          {allInputs}
         </Form>
      </div>
   );
};

export default InvoiceForm;