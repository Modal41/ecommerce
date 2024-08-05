import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import Content from '../../components/Guest/Content'
import Breadcrumb from '../../components/Guest/Home/Breadcrumb'
import { useParams } from 'react-router-dom'
import OrderInfo from '../../components/Guest/OrderDetail/OrderInfo'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import OrderCart from '../../components/Guest/OrderDetail/OrderCart'
import OrderMap from '../../components/Guest/OrderDetail/orderMap'

const OrderDetail = () => {
    
    const {id} = useParams()
    const [orderDetail, setOrderDetail] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        axios.post('http://localhost:3000/api/guest/getOrderDetail',{id}).then(res=>{
            if(res.data.error)
                navigate("/aradiginiz-sayfa-bulunamadi")
            else{
                res.data.shortID = "TR-"+id.substr(0,5)
                setOrderDetail(res.data)
            }
                
        }).catch(e=>{
            console.log(e)
        })
    },[])

    return (
        <>
                <Breadcrumb>
                    <ul className='breadcrumb mb-0 px-4'>
                        <li><Link to="/">Anasayfa</Link></li>
                        <li><Link to="/orders">Siparişlerim</Link></li>
                        <li>Sipariş Durumu</li>
                    </ul>
                </Breadcrumb>
                <Content>
                    <div className='primary-font'>
                        <h4>TR-{id.substr(0,6)} Nolu Siparişi Görüntüle</h4>
                        <p>Siparişinizin detaylarını bu sayfadan görüntüleyebilirsiniz.</p> <hr />
                    </div>
                    {orderDetail ? (
                        <>
                            <OrderInfo order={orderDetail} />
                            <OrderCart carts = {orderDetail.orderCartInfo}/>
                            {orderDetail.orderStatus == "Yola Çıktı" && <OrderMap /> }
                        </>
                    ) : <p>Yükleniyor...</p>}
                </Content>
            </>
    )
}

export default OrderDetail