import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './CurierBuilder.scss';
import Curier from './../../components/emailForms/CurierForm/CurierForm';
import axios from './../../axios-order';
import { createInputConfig } from './../../helper/helper';
import Popup from './../../components/UI/PopUp/Popup';
import Modal from './../../components/UI/Modal/Modal';


const CurierBuilder = () => {
   const { t } = useTranslation();

   const [curier, setCurier] = useState({
      curier: {
         username: createInputConfig('input', 'text', `${t('Ваше имя')}`, '', ''),
         organization: createInputConfig('input', 'text', `${t('Организация')}`, '', ''),
         phone: createInputConfig('input', 'text', `${t('Номер телефона')}`, '', ''),
         deliveryAddress: createInputConfig('input', 'text', `${t('Адрес доставки')}`, '', ''),
         deliveryType: {
            elemType: 'select',
            elemConfig: {
               options: [
                  { value: '', displayValie: '-' },
                  { value: 'documents', displayValie: `${t('Документы')}` },
                  { value: 'parcel', displayValie: `${t('Посылка')}` },
               ],
               label: `${t('Тип отправления')}`
            },
            value: ''
         },
         weight: createInputConfig('input', 'text', `${t('Вес')}`, '', ''),
         email: createInputConfig('input', 'email', 'Email', '', ''),
         message: createInputConfig('input', 'text', `${t('Комментарий')}`, '', ''),
      },
      isValid: true,
      showModal: false
   });
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

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

   const handleChange = (e, key) => {
      let cloneData = { ...curier.curier };
      cloneData[key].value = e.target.value;

      setCurier(prevState => ({
         ...prevState,
         curier: {
            ...cloneData,
         }
      }))
   };

   const resetData = () => {
      const Form = document.querySelector('#form-curier');
      let cloneData = { ...curier.curier },
         key;
      for (key in cloneData) {
         cloneData[key].value = '';
      }
      Form.reset();
      setCurier(prevState => ({
         ...prevState,
         curier: {
            ...cloneData
         }
      }));
   };

   const handleSubmit = e => {
      // e.preventDefault();  
      let isValid = handleValidation(curier.curier);
      setCurier(prevState => ({
         ...prevState,
         isValid: isValid
      }));

      if (isValid) {
         let key,
            data = {
               "subject": "REQUEST_DELIVERY",
            };

         for (key in curier.curier) {
            data[key] = curier.curier[key].value;
         }

         axios.post('/emails', data)
            .then(response => {
               setCurier(prevState => ({
                  ...prevState,
                  showModal: true
               }));
            })
            .catch(error => {
            })
      }
   };

   const handleClose = () => {
      resetData();
      setCurier(prevState => ({
         ...prevState,
         showModal: false,
      }));
   };

   return (
      <div className="CurierBuilder">
         <Curier
            elemConfig={curier.curier}
            handleChange={(event, key) => handleChange(event, key)}
            handleSubmit={handleSubmit}
            isValid={curier.isValid}
            id='form-curier'
         />
         <Modal show={curier.showModal} close={handleClose}>
            <Popup text={t('Сообщение отправлено')} />
         </Modal>
      </div>
   );
};

export default CurierBuilder;