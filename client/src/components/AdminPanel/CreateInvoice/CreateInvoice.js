import React from 'react';

import InvoiceForm from '../InvoiceForm/InvoiceForm'

const CreateInvoice = props => {
   return (
      <>
         <InvoiceForm 
            formState={props.formState} 
            showForm={props.showForm}
            formSubmit={event => props.formSubmit(event)}
            changeInputHandler={props.changeInputHandler}
            isValid={props.formState.isValid}
            errorText={props.formState.displayErrorText}
            closeForm={props.closeForm}
            heading={'Добавить накладную'}
            btnText={'Добавить'}
         />
      </>
   );

};

export default CreateInvoice;