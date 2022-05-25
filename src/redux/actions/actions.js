import {creatorChangeUSDtype, creatorGetARStoUSD} from './actionsCreators';

export function getARStoUSD(){
    return async function(dispatch){
        return fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        .then(res => res.json())
        .then(data => data.map(e => {return {dolarType: e.casa.nombre, price: e.casa.venta.replace(',','.')}}).filter(e => e.dolarType === 'Dolar Oficial' || e.dolarType === 'Dolar Blue'))
        .then(change => dispatch(creatorGetARStoUSD(change)))
        .catch(err =>{
            console.log(err);
        })
    }
}

export function changeUSDtype(typeUSD){
    return async function (dispatch){
        return dispatch(creatorChangeUSDtype(typeUSD))
    }
}