import CommonCard from "../commons/CommonCard";


function CryptoProfileWorker({data}){
const coin = data.coins[0]

        return (<CommonCard data={coin}/>);
}

export default CryptoProfileWorker;
