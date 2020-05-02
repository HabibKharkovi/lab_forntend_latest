import React from 'react';
import PatientContent from './components/patient';
import ServiceContent from './components/services';
import Sidebar from './components/sidebar';
import Header from './components/header';
import {Route,Switch} from 'react-router-dom';
import './App.scss';

function App() {

  console.log('app')
  return (
    <div className="lab">
      <Sidebar/>
      <div className="content-container">
        <Header/>
        <div className="main-content">
            <Switch>
              <Route exact path="/patient">
                <PatientContent/>
              </Route>
              <Route path='/test'>
                <ServiceContent/>
              </Route>
            </Switch>
        </div>
      </div>

    </div>
  );
}

export default App;
