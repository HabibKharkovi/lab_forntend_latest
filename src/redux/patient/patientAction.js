import {ADD_TEST, REMOVE_TEST} from './patientType';

export const add_test = ({id, name, price}) => ({
    type: ADD_TEST,
    payLoad: {id, name, price}
})

export const remove_test = ({id, name, price}) => ({
    type: REMOVE_TEST,
    payLoad: {id, name, price}
})