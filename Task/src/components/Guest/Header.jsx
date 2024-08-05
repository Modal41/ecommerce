import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import Logo from '/assets/img/logo.png'
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart'
import { useNavigate } from "react-router-dom";

const Header = () => {

  const {totalItems} = useCart()
  const navigate = useNavigate()
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  useEffect(()=>{
    setHamburgerMenu(false)
  },[navigate])

  return (
    <header className="container-fluid bg-white shadow py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white primary-font">
          <NavLink className="navbar-brand" to="/"><img src={Logo} height={30} /></NavLink>
          <button className="navbar-toggler" onClick={()=>{ setHamburgerMenu(!hamburgerMenu) }} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse ${hamburgerMenu && "show"} navbar-collapse ms-lg-5 ms-0 d-lg-flex justify-content-between`} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Anasayfa</NavLink>
              </li>
              
              <li className="nav-item active">
                <NavLink className="nav-link" to="/about-us">Hakkımızda</NavLink>
              </li>

              <li className="nav-item active">
                <NavLink className="nav-link" to="/orders">Siparişlerim</NavLink>
              </li>
            </ul>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link position-relative" to="/cart">
                  <span className="me-2 position-relative"><span className="d-lg-none d-inline">Sepetim</span> <span className="badge bg-white rounded primary-color shadow position-absolute" style={{right:"-40px",top:"-10px"}}> {totalItems} </span></span>
                  <FaShoppingBasket className="primary-color" style={{fontSize:"25px"}} /> 
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
