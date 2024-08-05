import React from 'react'
import {useCart} from 'react-use-cart'
import { FaTimes } from "react-icons/fa";
import iziToast from 'izitoast'


const CartItems = () => {

  const {items, cartTotal, totalUniqueItems,removeItem} = useCart()
  const handleCartRemoveItem = (id)=>{
    removeItem(id)
    iziToast.success({
        title:"Başarılı!",
        message:"Ürün sepetten başarıyla kaldırıldı.",
        position:"topLeft"
    })
  }

  return (
    <>
        <div className='card border-0 p-4' style={{background:"transparent"}}>
            <div className='d-flex justify-content-between primary-font'><h1 className='fw-bold'>Sipariş Sayısı:</h1> <h1 className='secondary-color fw-bold'> {totalUniqueItems} </h1></div>
            <ul className='p-0 mt-4' style={{listStyleType:"none"}}>
                
                {items.map(item=>(
                    <li key={item.id} className='m-0 p-0 d-flex justify-content-between mb-5 position-relative'>
                        <button className='btn text-white shadow-sm badge bg-danger position-absolute' onClick={()=>{handleCartRemoveItem(item.id)}} style={{right:"0px",top:"-20px"}}><FaTimes /></button>
                        <div className='d-flex gap-3'>
                            <img src={item.image} className='rounded' width={100} />
                            <h5 className='primary-font my-auto fw-bold'>{item.name} <span className='d-block fw-normal mt-2' style={{fontSize:"15px"}}>Adet: {item.quantity}</span></h5>
                        </div>
                        <h2 className='primary-font fw-bold secondary-color my-auto text-center'>{item.quantity * item.price} ₺</h2>
                    </li>
                ))}
                <hr />
                
                <div className='d-flex justify-content-between primary-font'>
                    <h3 className='my-auto'>Sipariş Tutarı:</h3>
                    <h1 className='primary-color fw-bold'>{cartTotal} ₺</h1>
                </div>

            </ul>
        </div>
    </>
  )
}

export default CartItems