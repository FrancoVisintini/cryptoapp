import { 
    GET_ARS_TO_USD,
    CHANGE_USD_TYPE
} from '../actions/actionTypes'

const initialState = {
    arsToUsd_Official:1,
    arsToUsd_Blue:1,
    typeUSD:'Blue',
    reset: true
}

function rootReducer(state=initialState, action){

    switch(action.type){
        case GET_ARS_TO_USD:
            return{   
                ...state,
                arsToUsd_Official: parseFloat(action.payload[0].price),
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