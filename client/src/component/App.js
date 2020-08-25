import React from 'react'
import { Router, Route } from "react-router-dom";
import FormLogin from './auth-component/FormLogin'
import FormRegistration from './auth-component/FormRegistration'
import history from '../history'
import MainPage from './MainPage'
import HoursReportForm from './toolbar-component/projects-menu/HoursReportForm'
import ProjectsForm from './toolbar-component/projects-menu/ProjectsForm'
import CustomersForm from './toolbar-component/customer-menu/CustomersForm'
import Header from './Header'

const App = function () {
   return (
      <Router history={history}>
         <div>
            <Route path='/' exact component={FormLogin} />
            <Route path='/registration' exact component={FormRegistration} />
            <Header />
            <Route path='/main-page' exact component={MainPage} />
            <Route path='/hours-report' exact component={HoursReportForm} />
            <Route path='/projects' exact component={ProjectsForm} />
            <Route path='/customers' exact component={CustomersForm} />
         </div>
      </Router>
   );
}

export default App