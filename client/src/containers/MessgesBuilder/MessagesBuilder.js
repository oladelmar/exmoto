import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './MessagesBuilder.scss';
import { createInputConfig } from './../../helper/helper';
import Messages from './../../components/Services/Services';
import Modal from './../../components/UI/Modal/Modal';
import Contact from './../../components/emailForms/ContactForm/ContactForm';
import axios from './../../axios-order';

const MessagesBuilder = () => {
   const { t } = useTranslation();

   const [messages, setMessages] = useState({
      contact: {
         username: createInputConfig('input', 'text', `${t('Имя')}`, ''),
         email: createInputConfig('input', 'email', 'Email', ''),
         message: createInputConfig('textarea', 'text', `${t('Cообщение')}`, ''),
      },
      isValid: true,
      showModal: false,
   });

   const handleValidation = data => {
      let arrKeys = Object.keys(data).length,
         idx,
         isValid = true;
      if (arrKeys === 0) isValid = false;
      for (idx in data) {
         if (data[idx].value === '') {
            isValid = false;
         }
      }
      return isValid;
   };

   const handleClick = e => {
      let target = e.target.closest('.Service');
      if (target !== null) {
         setMessages(prevState => ({
            ...prevState,
            showModal: true,
         }));
      }
   };

   const handleChange = (e, key) => {
      let cloneData = { ...messages.contact };
      cloneData[key].value = e.target.value;

      setMessages(prevState => ({
         ...prevState,
         contact: {
            ...cloneData,
         }
      }))
   };

   const handleSubmit = e => {
      e.preventDefault();
      let isValid = handleValidation(messages.contact);
      setMessages(prevState => ({
         ...prevState,
         isValid: isValid
      }));

      if (isValid) {
         let key,
            data = {
               "subject": "CONTACT_US",
            };

         for (key in messages.contact) {
            data[key] = messages.contact[key].value;
         }

         axios.post('/emails', data)
            .then(response => {
               resetData();
            })
            .catch(error => {
               setMessages(prevState => ({
                  ...prevState,
                  isValid: false
               }));
            })
         setMessages(prevState => ({
            ...prevState,
            showModal: false
         }));
      }
   };

   const resetData = () => {
      const Form = document.querySelector('#form-contact');
      let cloneData = { ...messages.contact },
         key;
      for (key in cloneData) {
         cloneData[key].value = '';
      }
      Form.reset();
      setMessages(prevState => ({
         ...prevState,
         contact: {
            ...cloneData
         }
      }));
   };

   const handleClose = () => {
      resetData();
      setMessages(prevState => ({
         ...prevState,
         showModal: false,
      }));
   };

   return (
      <div className="MessagesBuilder">
         <Messages click={event => handleClick(event)} />
         <Modal show={messages.showModal} close={handleClose}>
            <Contact
               elemConfig={messages.contact}
               handleChange={(event, key) => handleChange(event, key)}
               handleSubmit={handleSubmit}
               isValid={messages.isValid}
               id='form-contact'
            />
         </Modal>
      </div>
   );
}

export default MessagesBuilder;