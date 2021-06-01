import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import AuthContextProvider from './components/context/Auth-Context';
import './i18n';
import { SpinnerCirle } from './components/UI/Spinner/Spinner';

// ReactDOM.render(
//     <AuthContextProvider>
//       <Suspense fallback={(<div className="Spinner"><SpinnerCirle/></div>)}>
//         <App />
//       </Suspense>
//     </AuthContextProvider>,
//   document.getElementById('root')
// );

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <AuthContextProvider>
        <Suspense fallback={(<div className="Spinner"><SpinnerCirle /></div>)}>
          <App />
        </Suspense>
      </AuthContextProvider>,
        </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
