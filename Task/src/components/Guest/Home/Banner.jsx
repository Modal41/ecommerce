import React from 'react'
import BannerImage from '/assets/img/bg.jpg'

const Banner = () => {
  return (
    <div className='container-fluid banner-bg'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 banner d-flex justify-content-start align-items-center primary-font'>
                    <div>
                        <h1 className='d-block '>Türkiye'nin Lider Yemek Sitesi !</h1>
                        <h6 className='fw-normal d-block ms-1'>Tek tıkla sipariş ver kurye adresine gelsin.</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner