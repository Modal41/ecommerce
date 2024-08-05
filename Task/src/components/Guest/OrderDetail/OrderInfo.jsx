import React from 'react'
import { FiHash,FiUser,FiPhone } from "react-icons/fi";
import { MdLocationCity } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiMotorcycleBold } from "react-icons/pi";


const OrderInfo = ({order}) => {
    return (
      <div className="row">
          <div className='col-12 mb-3'>
              <h5 className="primary-font">Fatura Bilgileri</h5>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 primary-font"><p>Sipariş Numarası <FiHash /></p> <p className="primary-color">{order.shortID}</p></div> 
          <div className="col-lg-2 col-md-4 col-sm-6 primary-font"><p>Fatura Ad & Soyad <FiUser /></p> <p className="primary-color">{order.orderUserInfo.name} {order.orderUserInfo.surname}</p></div> 
          <div className="col-lg-2 col-md-4 col-sm-6 primary-font"><p>Sipariş Telefon <FiPhone /></p> <p className="primary-color">{order.orderUserInfo.phone}</p></div> 
          <div className="col-lg-2 col-md-4 col-sm-6 primary-font"><p>Sipariş İl / İlçe <MdLocationCity  /></p> <p className="primary-color">{order.orderUserInfo.city} / {order.orderUserInfo.district}</p></div> 
          <div className="col-lg-2 col-md-4 col-sm-6 primary-font"><p>Sipariş Adres <IoLocationSharp  /></p> <p className="primary-color">{order.orderUserInfo.adress}</p></div> 
          <div className="col-lg-2 col-md-4 col-sm-6 primary-font"><p>Sipariş Durumu <PiMotorcycleBold /></p> <p className="primary-color">{order.orderStatus}</p></div> 
      </div>
    )
}

export default OrderInfo