import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../commons/Loading';
import CryptoProfileWorker from '../workers/CryptoProfileWorker';


const CryptoProfileContainer= ({})=>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
	const {rank} = useParams();

    
    useEffect(()=>{
        fetch(`https://api.coinstats.app/public/v1/coins?skip=${rank-1}&limit=1&currency=USD`)
        .then(res => res.json())
            .then(data =>{setData(data);
            setLoading(false);
        })   
        },[rank]);
 return (        
 
 <div style={{display: 'flex',
 flexDirection: 'row',
 alignItems: 'center',}}>
{loading  
? 
<Loading/>  
: 
<div>
     {<CryptoProfileWorker data={data}/>}
</div>}
</div>)

}

export default CryptoProfileContainer;