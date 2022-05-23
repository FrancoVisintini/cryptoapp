import { 
    GET_ARS_TO_USD,
    CHANGE_USD_TYPE
} from './actions'

const initialState = {
    arsToUsd_Oficial:1,
    arsToUsd_Blue:1,
    typeUSD:'Blue',
    reset: true
}

function rootReducer(state=initialState, action){

    switch(action.type){
        case GET_ARS_TO_USD:
            return{   
                ...state,
                arsToUsd_Oficial: parseFloat(action.payload[0].price),
                arsToUsd_Blue: parseFloat(action.payload[1].price)
            }
        case CHANGE_USD_TYPE:
            return{   
                ...state,
                typeUSD: action.payload
            }
        default:
            return state;
    }

}

export default rootReducer;