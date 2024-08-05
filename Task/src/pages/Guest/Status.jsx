import React from 'react'
import Breadcrumb from '../../components/Guest/Home/Breadcrumb'
import { Link } from 'react-router-dom'
import Content from '../../components/Guest/Content'
import {useSearchParams} from 'react-router-dom'
import orderSuccess from '/assets/img/ordersuccess.png'

const Status = () => {

    const [searchParams,setSearchParams] = useSearchParams()
    console.log(searchParams.get("ok"))

    return (
        <>
            <Breadcrumb>
                <ul className='breadcrumb mb-0 px-4'>
                    <li><Link to="/">Anasayfa</Link></li>
                    <li>{ searchParams.get("ok") == "true" ? "Siparişiz Başarıyla Alındı":"Siparişiniz Maalesef Alınamadı" }</li>
                </ul>
            </Breadcrumb>
            <Content>
                <div className='text-center'>
                    {searchParams.get("ok") == "true" && <img src={orderSuccess} height={300} alt="" />}
                    <h3 className='primary-font secondary-color'>{ searchParams.get("ok") == "true" ? "Siparişiz Başarıyla Alındı":"Siparişiniz Maalesef Alınamadı" } !</h3>
                    <p>{ searchParams.get("ok") == "true" ? "Siparişiz başarıyla alındı en kısa sürede hazırlanıp profesyonel kuryelerimiz ile en erken zamanda kapınızdayız.":"Siparişiniz alınırken teknik bir hata yaşandı lütfen daha sonra tekrar deneyin." }</p>
                    <Link to="/orders" className='btn primary-btn'>Siparişlerimi Takip Et</Link>
                </div>
            </Content>
        </>
    )
}

export default Status