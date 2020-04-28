import {REMOVE_TEST, ADD_TEST} from './patientType';
const initialState = {
    multipleSelector: []
}

export default function patient(state = initialState, action){
    switch(action.type){
        case ADD_TEST: 
            return {
                ...state,
                multipleSelector: [...state.multipleSelector, action.payLoad]
            }
        case REMOVE_TEST:
            console.log(action.payLoad.id)
            const filter = state.multipleSelector.filter(item => item.id !== action.payLoad.id)
            console.log("filter", filter)
            console.log("state", state.multipleSelector)
            return {
                ...state,
                multipleSelector: filter
            }
        default :
            return state;

    }
}