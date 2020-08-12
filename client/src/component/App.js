import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import FormLogin from './auth-component/FormLogin'
import FormRegistration from './auth-component/FormRegistration'


const App = function () {
   return (
      <BrowserRouter>
         <div>
            <Route path='/' exact component={FormLogin} />
            <Route path='/registration' exact component={FormRegistration} />
         </div>
      </BrowserRouter>
   );
}

export default App