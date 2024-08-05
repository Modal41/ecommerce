import React from 'react'
import Breadcrumb from '../../components/Guest/Home/Breadcrumb'
import { Link } from 'react-router-dom'
import Content from '../../components/Guest/Content'
import errorImage from '/assets/img/404.png'

const Error = () => {
  return (
    <>
        <Breadcrumb>
            <ul className='breadcrumb mb-0 px-4'>
                <li><Link to="/">Anasayfa</Link></li>
                <li>Aradığınız Sayfa Bulunamadı</li>
            </ul>
        </Breadcrumb>
        <Content>
            <div className='text-center'>
                <img src={errorImage} className="img-fluid" />
                <h3 className='primary-font secondary-color'>Aradığınız Sayfa Bulunamadı !</h3>
                <p>Aradığınız sayfa kaldırılmış veya değiştirilmiş lütfen daha sonra tekrar deneyin.</p>
                <Link to="/" className='btn primary-btn'>Anasayfaya Dön</Link>
            </div>
        </Content>
    </>
  )
}

export default Error