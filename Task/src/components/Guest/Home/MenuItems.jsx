import React from 'react'
import Item from '../Item'


const MenuItems = ({products}) => {
  
  return (
    <div className='container mb-5 pb-5'>
        <div className='row'>
            {products.map(product=>( 
              <Item key={product._id} productInfo={product} toClass={"col-lg-4 mb-4"} />
            ))}
        </div>
    </div>
  )
}

export default MenuItems