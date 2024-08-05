import React,{useEffect,useState} from 'react'

const OrderCart = ({carts}) => {

    const [totalSum, setTotalSum] = useState(0)
    useEffect(()=>{
        carts.map(item=>{
            setTotalSum(totalSum+item.itemTotal)
        })
    },[carts])

    return (
        <div className="row mt-5">
            <div className='col-12 mb-3'>
                <h5 className="primary-font mb-4">Sipariş Bilgileri</h5>
                <ul style={{listStyleType:"none"}} className='m-0 p-0'>
                    {carts.map(item=>( 
                        <li key={item.id} className='my-2 d-sm-flex gap-3 primary-font'>
                            <img src={item.image} height={100} className='rounded' />
                            <div className='mt-sm-0 mt-4'>
                                <h5>{item.name}</h5>
                                <p className='mb-0'>Adet:{item.quantity}</p>
                                <h6>{item.price} ₺</h6>
                            </div>
                            <div className='text-right w-100 my-auto primary-font primary-color fw-bold' style={{textAlign:"right"}}><h3 className='my-auto w-100'>{item.itemTotal} ₺</h3></div>
                        </li>
                    ))}
                </ul>
                <hr />
                <h5 className='primary-font text-right'>Sipariş Toplamı: <span className='primary-color'>{totalSum} ₺</span></h5>
            </div>
        </div>
    )
}

export default OrderCart