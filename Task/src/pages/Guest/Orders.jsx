import React,{useState,useEffect} from 'react'
import Breadcrumb from '../../components/Guest/Home/Breadcrumb'
import { Link } from 'react-router-dom'
import Content from '../../components/Guest/Content'
import Table from '../../components/Guest/Orders/OrderTable'
import axios from 'axios'
import noOrder from '/assets/img/nullorder.jpg'

const Orders = () => {

    const [orders, setOrders] = useState([])
    useEffect(()=>{
        axios.post("http://localhost:3000/api/guest/getOrders").then(res=>{
            setOrders(res.data)
        }).catch(error=>{console.log(error)})
    },[])

    return (
        <>
            <Breadcrumb>
                <ul className='breadcrumb mb-0 px-4'>
                    <li><Link to="/">Anasayfa</Link></li>
                    <li>Siparişlerim</li>
                </ul>
            </Breadcrumb>
            <Content>
                <div className='primary-font'>
                    <h4>Siparişlerim</h4>
                    <p>Mevcut siparişlerinizi, sipariş durumlarını bu sayfadan görüntüleyebilirsiniz.</p> <hr />
                </div>
                {orders.length>0 ? <Table orders={orders} /> : 
                    <div className='text-center my-4'>
                        <img src={noOrder} alt="Siparişiniz Bulunamadı" width={300} className='img-fluid' />
                        <h5 className='mt-5 primary-font secondary-color'>Aktif veya daha önce verilmiş siparişiniz bulunmamaktadır.</h5>
                    </div>
                }
            </Content>
        </>
    )
}

export default Orders