import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import Loading from "../commons/Loading";
import StickyHeadTable from "../commons/Table/StickyHeadTable";
import { getARStoUSD } from "../../redux/actions/actions";
import { useSelector } from 'react-redux';

const columns = [
    { id: 'rank', label: 'Rank', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 50 },
    { id: 'symbol', label: 'Code', minWidth: 50 },
    { id: 'priceUSD', label: 'Price in USD', minWidth: 50, align: 'right', format: (value) => Intl.NumberFormat('es-AR').format(value)},
    { id: 'priceARS', label: 'Price in  ARS', minWidth: 50, align: 'right', format: (value) => Intl.NumberFormat('es-AR').format(value)},
    { id: 'variation', label: '24hr Variation', minWidth: 50, align: 'right', format: (value) => value.toFixed(2),},
  ];
  


export default function CoinsTable (){
// acá meti un cambio
    const dispatch  = useDispatch();

    const changeARStoUSD  = useSelector(state => state[`arsToUsd_${state.typeUSD}`])

    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        dispatch(getARStoUSD());    
        //eslint-disable-next-line 
    },[])

    useEffect(()=>{
        fetch('https://api.coinstats.app/public/v1/coins?currency=USD')
            .then(res => res.json())
            .then(data => data.coins.map((coin) => {
                return {
                    id:coin.id,
                    rank: coin.rank,
                    name: coin.name,
                    symbol:coin.symbol,
                    priceUSD: coin.price,
                    priceARS: coin.price*changeARStoUSD,
                    variation: coin.priceChange1d+'%'
                }}))
            .then(filteredData => {
                setCoins(filteredData);
                setLoading(false);
            })
            
    },[changeARStoUSD])


    return(
        <>
			{
			    loading ? <Loading/> :
                <div>
                    <StickyHeadTable columns={columns} rows={coins}/>
                </div> 
			
			}
		</>    
    );
}
