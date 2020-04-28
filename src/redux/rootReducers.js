import { combineReducers } from 'redux';
import patient from './patient/patientReducer';

const rootReducers = combineReducers({ patient })

export default rootReducers;