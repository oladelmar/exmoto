export const getEpochTime = (date) => {
   const reverseDate = date.split('-').reverse().join('-');
   const epochDate = new Date(reverseDate);
   return epochDate.getTime();
};

export const epochToDate = (epoch, separ) => {        
   const date = new Date(epoch);
   return `${date.getDate()}${separ}${date.getMonth() + 1}${separ}${date.getFullYear()}`;
}

// Конфигурация Input
export const createInputConfig = (elemType, inpType, label, placeholder, disabled) => ({
   elemType: elemType,
   disabled: disabled,
   value: '',
   elemConfig: {
      inpType: inpType,
      label: label,
      placeholder: placeholder,
   }
});

// Оставляет 2 цифры после запятой
export const fixNumber = nmb => {
   return Math.floor(nmb * 100) / 100;
};