import React from 'react';
import PatientContent from './components/patient';
import Sidebar from './components/sidebar';
import Header from './components/header';
import {Route} from 'react-router-dom';
import './App.scss';

function App() {

  console.log('app')
  return (
    <div className="lab">
      <Sidebar/>
      <div className="content-container">
        <Header/>
        <div className="main-content">
            <Route path="/">
              <PatientContent/>
            </Route>
        </div>
      </div>

    </div>
    
  );
}

export default App;
