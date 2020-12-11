import React, {  useCallback, useContext,    useRef, useState } from 'react';
import './AdminPanel.scss';
import axios from './../../axios-order';
import { countryAxios } from './../../axios-order';
import Input from './../../components/UI/Input/Input';
import Form from './../../components/UI/Form/Form';
import Button from './../../components/UI/Button/Button';
import Popup from './../../components/UI/PopUp/Popup';
import Modal from './../../components/UI/Modal/Modal';
import { SpinnerCirle } from './../../components/UI/Spinner/Spinner';
import CreateInvoice from './../../components/AdminPanel/CreateInvoice/CreateInvoice';
import EditInvoice from './../../components/AdminPanel/EditInvoice/EditInvoice';
import { getEpochTime, createInputConfig, epochToDate } from './../../helper/helper';
import { AuthContext } from './../../components/context/Auth-Context';

const AdminPanel = props => {
   const [formState, setFormState] = useState({ 
      invoiceForm: {
         trackingNumber: createInputConfig('input', 'text', 'Номер накладной', ''),
         fromCountry: createInputConfig('search-input','text', 'Из какой страны посылка?', ''),
         fromCity: createInputConfig('input','text', 'Из какого города посылка?', ''),
         toCountry: createInputConfig('search-input', 'text', 'В какую страну доставка', ''),
         toCity: createInputConfig('input','text', 'Город доставки', ''),
         estimatedDeliveryDate: {
            elemType: 'input-mask',
            elemConfig: {
               inpType: 'text',
               label: 'Предполагаемое время доставки. ДД-ММ-ГГГГ',
            },
            validation: true,
            value: ''
         },
         delivered: {
            elemType: 'select',
            elemConfig: {
                  options: [
                     {value: '', displayValie: '-'},
                     {value: false, displayValie: 'В Пути'},
                     {value: true, displayValie: 'Доставлено'},
                  ],
                  label: 'Статус доставки'
            },
            validation: true,
            value: ''
         },
         recipient: {
            elemType: 'input',
            elemConfig: {
               inpType: 'text',
               placeholder: 'Пример: Валера Молдавский',
               label: 'Получил(a)',
            },
            disabled: true,
            value: ''
         }
      },  
      errorText: {
         emptyFieldsError: "Заполните пустые поля",
         notUniqueId: "Накладная с таким номером уже есть",
         errorDate: "Дата доставки не может быть раньше текущей"
      },
      queryResult: [],
      showResultBox: false,
      isValid: true, 
      showAddForm: false,
      showUpdateForm: false,
      submitted: false,
      displayErrorText: ''
   });
   const [searchState, setSearchState] = useState({
      elemType: 'input',
      elemConfig: {
         inpType: 'text',
         placeholder: '',
      },
      errorText: {
         emptyFieldsError: "Заполните пустое поле",
         noId: "С таким номером нет накладной",
      },
      displaySearchErrorText: '',
      searchResult: {},
      showSearchResults: false,
      validResults: true,
      showSpinner: false,
      searchValue: '',
   });
   const searchInput = useRef(null);
   const authContext = useContext(AuthContext);
   
   const handleSearchInputChange = e => {
      let value = e.target.value;
      setSearchState(prevState => ({
            ...prevState,
            searchValue: value
      }))
   };

   const handleSearchSubmit = e => {
      e.preventDefault();
      searchInput.current.focus();

      let isValid = true;
      if(searchState.searchValue === '') {
         isValid = false;
      }
      if(isValid) {
         axios.get(`/deliveries/${searchState.searchValue}`)
         .then(response => {
            const result = {};
            const localStateKey = Object.keys(formState.invoiceForm);
            for (let key of localStateKey) {
               result[key] = response.data.data.delivery[key];
               if (key === 'estimatedDeliveryDate') {
                  result[key] = epochToDate(response.data.data.delivery[key], '-');
               }
            }
            setSearchState(prevState => {
               return {
                  ...prevState,
                  searchResult: {...result},
                  showSearchResults: true,
               };
            });
         })
         .catch(error => {
            setSearchState(prevState => {
               return {
                  ...prevState,
                  showSearchResults: false,
                  validResults: false,
                  displaySearchErrorText: searchState.errorText.noId
               };
            });
         })
      }
      setSearchState(prevState => ({
         ...prevState,
         validResults: isValid, 
         showSearchResults: false,
         displaySearchErrorText: searchState.errorText.emptyFieldsError
      }));
   };

   const handleSearchInputBlur = () => {
      setSearchState(prevState => ({
         ...prevState,
         validResults: true,
      }));
   };

   const handleQueryInputBlur = inpId => {
      const cloneinvoiceForm = {...formState.invoiceForm};
      cloneinvoiceForm[inpId].countryBox = false
      setFormState(prevState => ({
         ...prevState,
         invoiceForm: {
            ...cloneinvoiceForm
         }
      }));
   };

   const validateEmptyFields = useCallback(() => {
      let isFormValid = true,  
      cloneinvoiceForm = Object.keys(formState.invoiceForm);    

     for (let val of cloneinvoiceForm) {
        if (val === 'recipient' && formState.invoiceForm.recipient.disabled === true) {
           continue;
        } else if (formState.invoiceForm[val].value === '') {
           isFormValid = false;
           break;
        } else {
           isFormValid = true;
        }
     }
     return {isFormValid, cloneinvoiceForm};
   }, [formState.invoiceForm]);

   const handleFormSubmit = useCallback(e => {
      e.preventDefault();
      const {isFormValid, cloneinvoiceForm} = validateEmptyFields();  
         if (isFormValid) {
            let order = {},
                reverseDate = '',
                epochDate;
            for (let value of cloneinvoiceForm) {
               order[value] = formState.invoiceForm[value].value;
               if (value === 'estimatedDeliveryDate') {
                  reverseDate = formState.invoiceForm[value].value.split('-').reverse().join('-');
                  epochDate = new Date(reverseDate);
                  order[value] = epochDate.getTime();
               }
            }
            axios.post('/deliveries', order )
            .then(response => {
               setFormState(prevState => ({
                  ...prevState,
                  submitted: true
               }));
            })
            .catch(error =>{
               let errText; 
               if(error.response.data.message.indexOf('Estimated') !== -1) {
                  errText = formState.errorText.errorDate
               }
               if (error.response.data.message.indexOf('Duplicate') !== -1) {
                  errText = formState.errorText.notUniqueId;
               }
               setFormState(prevState => ({
                  ...prevState,
                  submitted: false,
                  isValid: false,
                  displayErrorText: errText
               }));
            })
         }
         setFormState(prevState => ({
               ...prevState,
               isValid: isFormValid,
               displayErrorText: formState.errorText.emptyFieldsError
         }));
   },[validateEmptyFields, formState.errorText.emptyFieldsError,formState.errorText.errorDate,formState.errorText.notUniqueId,formState.invoiceForm]);
  
   const handleFormInputChange = (e, inpId) => {
      const cloneinvoiceForm = {...formState.invoiceForm};
      let value = e.target.value;
      cloneinvoiceForm[inpId].value = value;

      if (cloneinvoiceForm[inpId].value === 'true') {
         cloneinvoiceForm.recipient.disabled = false;
      } 
      if (cloneinvoiceForm[inpId].value === 'false') {
         cloneinvoiceForm.recipient.disabled = true;
      }
      
      if (inpId === 'fromCountry' || inpId === 'toCountry') {
         cloneinvoiceForm[inpId].countryBox = true
         handleCountryQuery(value, inpId);
      } 

      setFormState(prevState => ({
         ...prevState,
         invoiceForm: {
            ...cloneinvoiceForm
         }
      }));
   };

   const handleFormUpdateSubmit = e => {
      e.preventDefault();
      const {isFormValid, cloneinvoiceForm} = validateEmptyFields();    
      setFormState(prevState => ({
         ...prevState,
         isValid: isFormValid,
         displayErrorText: formState.errorText.emptyFieldsError
       }));
 
       if (isFormValid) {
          let order = {};
          for (let value of cloneinvoiceForm) {
             if (formState.invoiceForm[value].value !== searchState.searchResult[value]) {
                order[value] = formState.invoiceForm[value].value;
             } 
          }
          if (order.estimatedDeliveryDate !== undefined) {
             const date = order['estimatedDeliveryDate']; 
             order.estimatedDeliveryDate = getEpochTime(date);
          }
          axios.patch(`/deliveries/${searchState.searchResult.trackingNumber}`,  order)
          .then(response => {
             setFormState(prevState => ({
                   ...prevState,
                   submitted: true
             }));
          })
          .catch(error =>{
             let errText; 
             if(error.response.data.message.indexOf('Estimated') !== -1) {
                errText = formState.errorText.errorDate
             }
             if (error.response.data.message.indexOf('duplicate') !== -1) {
                errText = formState.errorText.notUniqueId;
             }
             setFormState(prevState => ({
               ...prevState,
               submitted: false,
               isValid: false,
               displayErrorText: errText
          }));
       })
    }
   };

   const handleDeleteInvoice =  () => {
      if (window.confirm("Уверены что хотите удалить эту накладную?")) {
         axios.delete(`/deliveries/${searchState.searchResult.trackingNumber}`)
         .then(response => {
            handleClose();
         })
         .catch(error => {
         })
      }
   };

   const handleClose = () => {
      const Form = document.querySelector('#addForm');      
      const resetState = {...formState.invoiceForm};

      for(let elem in resetState) {resetState[elem].value = '';}
   
      setFormState(prevState => ({
            ...prevState,
               invoiceForm: {
                  ...resetState,
               },
               submitted: false,
               isValid: true,
               showAddForm: false,
               showUpdateForm: false,
      }));
      setSearchState(prevState => ({
            ...prevState,
            searchResult: {},
            showSearchResults: false
      }))
      Form.reset();
   };

   const removeSessionKey = key => {
      sessionStorage.removeItem(key);
      authContext.login();
   }; 

   const handleCountryQuery = (query, inpId) => {
      countryAxios.post('suggest/country', JSON.stringify({query: query}), {
         mode: "cors",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token c672e398bc6030ba444d87a0bf8bc22eebf96501"
         },
      })
      .then(
         res => {
            let countries = [],
                country;
                
            const cloneinvoiceForm = {...formState.invoiceForm};
            cloneinvoiceForm[inpId].countryBox = true;
                
            if (query === '' || res.data.suggestions.length === 0) {
               cloneinvoiceForm[inpId].countryBox = false;             
            } else {
               for (country of res.data.suggestions) countries.push(country.value); 
               cloneinvoiceForm[inpId].countryBox = true;
            };

            setFormState(prevState => ({
               ...prevState,
               invoiceForm: {
                  ...cloneinvoiceForm
               },
               queryResult: [...countries]
            }));
         })
      .catch(err => {
         setFormState(prevState => ({
            ...prevState,
            showResultBox: false,
            queryResult: []
         }));
      })
   };

   const handleSelectCountry = (e, inpId) => {
      const cloneInvoiceForm = {...formState.invoiceForm};
      let value = e.target.textContent;
      cloneInvoiceForm[inpId].value = value;
      cloneInvoiceForm[inpId].countryBox = false;
      
      setFormState(prevState => ({
         ...prevState,
         invoiceForm: {
            ...cloneInvoiceForm
         },
      }));
   };

   const handleAddFormShow = () => {
      setFormState(prevState => ({
            ...prevState,
            showAddForm: true,
            showUpdateForm: false
         }));
      setSearchState(prevState => ({
         ...prevState,
         showSearchResults: false
      }))   
   };

   const handleUpdateFormShow = () => {
      const oldState = {...formState.invoiceForm};
      for (let key in searchState.searchResult) {
         oldState[key].value = searchState.searchResult[key];
         if (searchState.searchResult['delivered'] === true) {
            oldState['recipient'].disabled = false;
         }
      }
      setFormState({
         ...formState,
         showUpdateForm: true,
         showAddForm: false,
      });
   };



   let InvoiceType = null;
      if (formState.showAddForm) {
         InvoiceType = 
         <CreateInvoice 
            formState={formState} 
            showForm={formState.showAddForm}
            formSubmit={event => handleFormSubmit(event)}
            changeInputHandler={(event, inpId) => handleFormInputChange(event, inpId)}
            isValid={formState.isValid}
            errorText={formState.displayErrorText}
            closeForm={handleClose}
            countries = {formState.queryResult}
            onBlurHandler = {inpId => handleQueryInputBlur(inpId)}
            selectCountryHandler = {(event, inpId) => handleSelectCountry(event, inpId)}
         />;
      } 
      if (formState.showUpdateForm) {
         InvoiceType = 
         <EditInvoice 
            showForm={formState.showUpdateForm}
            formState={formState} 
            formSubmit={event => handleFormUpdateSubmit(event)}
            changeInputHandler={(event, inpId) => handleFormInputChange(event, inpId)}
            isValid={formState.isValid}
            errorText={formState.displayErrorText}
            closeForm={handleClose}
            countries = {formState.queryResult}
            onBlurHandler = {inpId => handleQueryInputBlur(inpId)}
            selectCountryHandler = {(event, inpId) => handleSelectCountry(event, inpId)}
         />  
      }

   return (
      <div className="Admin">
         <div className="Left-Side">
            <div className="Left-Side-Box">
                  <Button
                     btnStyle={formState.showAddForm ? 'Button__Green--Active' : 'Button__Green'}
                     handleClick={handleAddFormShow}
                  >
                     Добавить накладную
                  </Button>
               <div className="Search">
                  <p className="Search__Title">Найти накладную</p>
                  <Form 
                     onSubmitHandler={event => handleSearchSubmit(event)}
                     isValid={searchState.validResults}
                     errText={searchState.displaySearchErrorText}
                     btnText='НАЙТИ'
                     btnStyle='Button__Green'
                     formStyle='FormBox'
                  >
                     <Input 
                        elemtype="input" 
                        elemConfig={searchState.elemConfig}
                        addChangeHandle={true}
                        onChangeHandler={event => handleSearchInputChange(event)}
                        addBlurHandle={true}
                        onBlurHandler={handleSearchInputBlur}
                        inpStyle='Form-Input'
                        ref={searchInput}
                     />
                  </Form>
                  <div className="Search__Result-Box">
                     {searchState.showSpinner ? <SpinnerCirle/> : 
                     <div className={searchState.showSearchResults ? "Search__Results Search__Results--Active " : "Search__Results"} >
                        <p className="Search__TrackID"><span className="Search__Span">Накладная:</span> {searchState.searchResult.trackingNumber}</p>
                        <div className="Search__Settings">
                           <Button
                              btnStyle="Button__Blue"
                              handleClick={handleUpdateFormShow}
                           >
                              редактировать
                           </Button>
                           <Button
                              btnStyle="Button__Red"
                              handleClick={handleDeleteInvoice}
                           >
                              удалить
                           </Button>
                        </div>
                     </div>}
                  </div>
               </div>
            </div>
            <div className="Left-Side__Logout"> 
               <Button  btnStyle="Button__Green" handleClick={() => removeSessionKey('access__token')}>ВЫЙТИ</Button>            
            </div>
         </div>
         <div className="Right-Side">
            {InvoiceType}             
            <Modal show={formState.submitted} close={handleClose}>
               <Popup text={formState.showAddForm ? 'Накладная добавлена' : 'Накладная отредактирована'}/>
            </Modal>
         </div>
      </div>
   );
};

export default AdminPanel;