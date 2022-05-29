import CommonTable from '../commons/CommonTable';

function CryptoTableWorker({data}){

    const columnHeadTable = Object.keys(data.coins[0])
    columnHeadTable.splice(0,2)
    columnHeadTable.splice(-2)
    columnHeadTable.splice(6,3)
    columnHeadTable.splice(1,1)




    const rowsTable = data.coins
        return (<CommonTable headData={columnHeadTable} rowData={rowsTable}/>)
}
export default CryptoTableWorker;
