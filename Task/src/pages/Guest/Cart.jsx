import React from "react";
import Breadcrumb from "../../components/Guest/Home/Breadcrumb";
import { Link } from "react-router-dom";
import CartItems from "../../components/Guest/Cart/CartItems";
import CheckOut from "../../components/Guest/Cart/CheckOut";
import { FaRegTrashCan } from "react-icons/fa6";
import { useCart } from 'react-use-cart'
import iziToast from 'izitoast';
import Content from '../../components/Guest/Content'
import EmptyCart from '/assets/img/emptyCart.webp'

const Cart = () => {

  const {emptyCart,isEmpty} = useCart()

  const handleClearCart = ()=>{

    iziToast.success({
      title: 'Başarılı!',
      message: 'Sepetiniz başarıyla temizlendi.',
      position: 'topLeft'
    })
    emptyCart()
  }

  return (
    <>
      <Breadcrumb>
        <div className="d-flex justify-content-between px-4">
          <ul className="breadcrumb mb-0 my-auto">
            <li>
              <Link to="/">Anasayfa</Link>
            </li>
            <li>
              <Link to="/cart">Sepetim</Link>
            </li>
          </ul>
          <div>
            <button className={`btn primary-btn primary-font my-auto ${isEmpty && "d-none"}`} onClick={ handleClearCart }><FaRegTrashCan /> Sepeti Temizle</button>
          </div>
        </div>
      </Breadcrumb>

      { !isEmpty ?
      <div className="container mb-5 py-5 cart">
        <div className="row">
            <div className="col-lg-6 mt-5"><CartItems/></div>
            <div className="col-lg-6 mt-5"><CheckOut/></div>
        </div>
      </div> : 
      <Content>
        <div className="text-center primary-font">
          <img src={EmptyCart} height={200} />
          <h3 className="primary-color fw-bold">Sepetinizde Ürün Bulunamadı.</h3>
          <p>Sepetinizde şuan ekli olan hiçbir ürün yok anasayfaya gidip yeni ürünler keşfedip sepetinize ekleyebilirsiniz</p>
          <Link to="/" className="secondary-btn btn">Anasayfaya Dön</Link>
        </div>
      </Content>
      }
    </>
  );
};

export default Cart;
