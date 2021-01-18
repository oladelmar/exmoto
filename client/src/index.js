import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import AuthContextProvider from './components/context/Auth-Context';
import './i18n';
import {SpinnerCirle} from './components/UI/Spinner/Spinner';

ReactDOM.render(
    <AuthContextProvider>
      <Suspense fallback={(<div className="Spinner"><SpinnerCirle/></div>)}>
        <App />
      </Suspense>
    </AuthContextProvider>,
  document.getElementById('root')
);

