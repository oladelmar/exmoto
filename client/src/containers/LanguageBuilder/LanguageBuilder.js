import React from 'react';
import Languages from './../../components/Languages/Languages';
import { useTranslation }  from 'react-i18next';

const LanguageBuilder = props => {
   const { i18n } = useTranslation();
   const handleLang = lang => {
      i18n.changeLanguage(lang);
      window.location.reload();
   };

   return (
      <>
       <Languages handleLang={lang => handleLang(lang)}/>
      </>
   )
};

export default LanguageBuilder