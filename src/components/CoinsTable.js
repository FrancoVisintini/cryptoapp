import { useEffect, useState } from "react";
import Loading from "./commons/Loading";
import StickyHeadTable from "./commons/StickyHeadTable";

const columns = [
    { id: 'rank', label: 'Rank', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 50 },
    { id: 'symbol', label: 'Code', minWidth: 50 },
    { id: 'priceUSD', label: 'Price in USD', minWidth: 50, align: 'right', format: (value) => value.toFixed(6),},
    { id: 'priceARS', label: 'Price in  ARS', minWidth: 50, align: 'right', format: (value) => value.toFixed(2),},
    { id: 'variation', label: '24hr Variation', minWidth: 50, align: 'right', format: (value) => value.toFixed(2),},
  ];
  


export default function CoinsTable (){

    const [coins, setCoins] = useState([])
    const [arsToUsd, setArsToUsd] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        .then(res => res.json())
        .then(data => data.map(e => {return {dolarType: e.casa.nombre, price: e.casa.venta}}))
        .then(change => {setArsToUsd(change)})
    },[])

    console.log(arsToUsd)

    useEffect(()=>{
        fetch('https://api.coinstats.app/public/v1/coins?currency=USD')
            .then(res => res.json())
            .then(data => data.coins.map((coin) => {
                return {
                    rank: coin.rank,
                    name: coin.name,
                    symbol:coin.symbol,
                    priceUSD: coin.price,
                    priceARS: coin.price*200,
                    variation: coin.priceChange1d+'%'
                }}))
            .then(filteredData => {
                setCoins(filteredData);
                setLoading(false);
            })
            
    },[])


    return(
        <>
			{
			loading 
			?
            <Loading/>
			: 
			<StickyHeadTable columns={columns} rows={coins}/>
			}
			
		</>    
    );


}