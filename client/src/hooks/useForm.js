import { useState } from 'react';

const useForm = () => {
   const [values, setValues] = useState({});

   const handleChange = e => {
      const {value, name} = e.target;
      setValues(prevState => {
         return {
            state:{
               ...prevState.state,
               [name]: value
            }
         };
      });      
   };
   return { handleChange,  values}
};

export default useForm;