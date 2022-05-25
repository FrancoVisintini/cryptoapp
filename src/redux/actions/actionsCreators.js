import {GET_ARS_TO_USD, CHANGE_USD_TYPE} from './actionTypes'

export function creatorGetARStoUSD(payload){
    return {
        type: GET_ARS_TO_USD,
        payload: payload
    }
}

export function creatorChangeUSDtype(payload){
    return {
        type: CHANGE_USD_TYPE,
        payload: payload
    }
}