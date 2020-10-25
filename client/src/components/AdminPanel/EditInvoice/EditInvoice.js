import React from 'react';

import InvoiceForm from '../InvoiceForm/InvoiceForm'

const EditInvoice = props => {
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
            heading={'Редактировать накладную'}
            btnText={'Изменить'}
         />
      </>
   );

};

export default EditInvoice;