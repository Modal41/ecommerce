import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { useState } from 'react';
import { useCart } from 'react-use-cart'
import IziToast from 'izitoast'

const Item = ({toClass,productInfo}) => {

  const [count, setCount] = useState(1)
  const {addItem} = useCart()

  const hundleBtn = ()=>{
    addItem({id:productInfo._id,name:productInfo.name,price:productInfo.price,image:productInfo.image},count)
    IziToast.success({
      title:"Başarılı!",
      message:"Ürün sepetinize başarıyla eklendi.",
      position:"topLeft"
    })
  }


  return (
    <div className={toClass}>
      <div className='card border-0 bg-white custom-shadow rounded'>
        <div className='card-header bg-white p-5 text-center ' style={{borderBottom:"1px solid #F2F2F2"}}><img src={productInfo.image} className="img-fluid" /></div>
        <div className='card-body bg-white primary-font px-5'><h2 className='fw-bold'>{ productInfo.name }</h2></div>
        <div className='card-footer bg-white border-0 px-5'>
          <div className='d-flex justify-content-between'>
            <h1 className='primary-font fw-bold secondary-color'>{ productInfo.price } ₺</h1>
            <div className='d-flex justify-content-between gap-2 my-auto' style={{height:"30px"}}>
              <button type='button' onClick={()=>{ count != 1 && setCount(count-1)}} className='btn secondary-bg custom-font text-white fw-bold py-0'>-</button>
              <input type="text" className='form-control bg-white' style={{width:"40px"}} disabled value={count} />
              <button type='button' onClick={()=>{ setCount(count+1) }} className='btn secondary-bg custom-font text-white fw-bold py-0'>+</button>
            </div>
          </div>
          <button className='btn secondary-bg custom-font text-white w-100 my-4 cartBtn' onClick={hundleBtn}><FaShoppingBasket/> SEPETE EKLE</button>
        </div>
      </div>
    </div>
  )
}

export default Item