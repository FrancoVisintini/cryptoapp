export const GET_ARS_TO_USD = "GET_ARS_TO_USD"
export const CHANGE_USD_TYPE ='CHANGE_USD_TYPE'

export function getARStoUSD(){
    return async function(dispatch){
        return fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        .then(res => res.json())
        .then(data => data.map(e => {return {dolarType: e.casa.nombre, price: e.casa.venta.replace(',','.')}}).filter(e => e.dolarType === 'Dolar Oficial' || e.dolarType === 'Dolar Blue'))
        .then(change => dispatch({
            type: GET_ARS_TO_USD,
            payload: change
        }))
        .catch(err =>{
            console.log(err);
        })
    }
}

export function changeUSDtype(typeUSD){
    return async function (dispatch){
        return dispatch({
            type: CHANGE_USD_TYPE,
            payload: typeUSD
        })
    }
}