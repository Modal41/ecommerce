import React,{useState,useEffect} from 'react'
import DataTable from 'react-data-table-component';
import {useNavigate} from 'react-router-dom'


const Table = ({orders}) => {

    const navigate = useNavigate()
    const navigateOrder = (id)=>{
        navigate("/orders/"+id)
    }

    const columns = [
        {
            name: 'Sipariş Numarası',
            selector: row => "#TR-"+row._id.substr(0,5),
        },
        {
            name: 'İsim',
            selector: row => row.orderUserInfo.name,
        },
        {
            name: 'Soyisim',
            selector: row => row.orderUserInfo.surname,
        },
        {
            name: 'Adres',
            selector: row => row.orderUserInfo.adress,
        },
        {
            name: 'Sipariş Durumu',
            cell: row => row.orderStatus
        },
        {
            name: 'Görüntüle',
            cell: row => <button onClick={()=>{ navigateOrder(row._id) }} className='btn primary-btn px-4 py-1'>Görüntüle</button>,
        }
    ];

    return (
        <div className='table-responsive'>
            <DataTable 
                columns={columns} 
                data={orders}
                pagination 
            />
        </div>
    )
}

export default Table