import React,{useState} from 'react'
import axios from 'axios'
import {useCart} from 'react-use-cart'
import {useNavigate} from 'react-router-dom'

const CheckOut = () => {

    const {emptyCart} = useCart()
    const navigate = useNavigate()
    const {items} = useCart()
    const [formData, setFormData] = useState({
        name:"",
        surname:"",
        email:"",
        phone:"",
        city:"",
        district:"",
        adress:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleSumbit = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:3000/api/guest/newOrder",{formData,items}).then( async(res)=>{
            if(res.data.success){
                await emptyCart()
                navigate("/status?ok=true")
            }
            else
                navigate("/status?ok=false")
        }).catch(error=>{console.log(error)})
    }


    return (
        <div className='card border-0 bg-white custom-shadow p-4'>
            <h3 className='fw-bold mb-4 primary-font'>Sipariş Bilgileri</h3>
            <form onSubmit={handleSumbit}>
                <div className='row'>
                    <div className='col-lg-6 mb-4'>
                        <div className='form-group'>
                            <input type="text" value={formData.name} name='name' onChange={handleChange} className='form-control' placeholder='Adınız' required />
                        </div>
                    </div>
                    <div className='col-lg-6 mb-4'>
                        <div className='form-group'>
                            <input type="text" value={formData.surname} name="surname" onChange={handleChange} className='form-control' placeholder='Soyadınız' required />
                        </div>
                    </div>
                    <div className='col-lg-6 mb-4'>
                        <div className='form-group'>
                            <input type="email" value={formData.email} name="email" onChange={handleChange} className='form-control' placeholder='Email Adresiniz' required />
                        </div>
                    </div>
                    <div className='col-lg-6 mb-4'>
                        <div className='form-group'>
                            <input type="tel" value={formData.phone} name="phone" onChange={handleChange} className='form-control' placeholder='Telefon Numaranız' required />
                        </div>
                    </div>
                </div>
                <h3 className='fw-bold mb-4 primary-font'>Teslimat Bilgileri</h3>
                <div className='row'>
                    <div className='col-lg-6 mb-4'>
                        <div className='form-group'>
                            <input type="text" value={formData.city} name="city" onChange={handleChange} className='form-control' placeholder='Şehir' required />
                        </div>
                    </div>
                    <div className='col-lg-6 mb-4'>
                        <div className='form-group'>
                            <input type="text" value={formData.district} name="district" onChange={handleChange} className='form-control' placeholder='İlçe' required />
                        </div>
                    </div>
                    <div className='col-lg-12 mb-4'>
                        <div className='form-group'>
                            <textarea className='form-control' value={formData.adress} name="adress" onChange={handleChange} rows={5} placeholder='Açık Adresiniz' required></textarea>
                        </div>
                    </div>
                </div>

                <button type='submit' className='btn secondary-btn w-100 py-3'>Siparişi Oluştur</button>

            </form>
        </div>
    )
}

export default CheckOut