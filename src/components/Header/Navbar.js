import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineShoppingCart, AiOutlineHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BiPhoneCall } from 'react-icons/bi'

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import "../../assets/Cart.css"
import ContentWrapper from "../ContextWrapper/ContentWrapper";
import { useSelector } from "react-redux";

function Navbar() {

  const [show, setShow] = useState("top");
  // const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const state = useSelector((state) => state.cartReducer)
  console.log(state.cart.length);

  const navigate = useNavigate();
  // const location = useLocation();

  const searchQueryHandler = (e) => {
    if(e.key === 'Enter' && query.length > 0){
      navigate(`/search${query}`)
      setTimeout(() => {
       setShowSearch(false);
      }, 1000);
    }
  }

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = () => {
    setMobileMenu(false)
  }
  return (
    <header
      className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}
    >
      <div className="container">
        <div className="div d-flex justify-content-between align-items-center">
          <div className="logo" onClick={navigationHandler}>
            <NavLink to='/'>
              <img src="https://www.logodesignlove.com/wp-content/uploads/2022/11/carebibi-logo-01-1200x1200.jpeg" alt="" />
            </NavLink>
          </div>
          <ul className="menuItems">
            <li onClick={navigationHandler} className="menuItem">
              <NavLink to='/'>
                <span><AiOutlineHome /> <span>Ana Səhifə</span></span>
              </NavLink>
            </li>
            <li onClick={navigationHandler} className="menuItem">
              <NavLink to='/product'>
                <span><AiOutlineHome /> <span>Məhsullar</span></span>
              </NavLink>
            </li>
            <li onClick={navigationHandler} className="menuItem">
              <NavLink to='/contact'>
                <span><BiPhoneCall /> <span>Kontakt</span></span>
              </NavLink>
            </li>
            <li onClick={navigationHandler} className="menuItem">
              <NavLink to='/profil'>
                <span><CgProfile/> <span>Profil</span></span>
              </NavLink>
            </li>
            <li onClick={navigationHandler} className="menuItem">
              <NavLink className='Cart' to='/cart'>
                <span><AiOutlineShoppingCart /> <span>Səbət {state.cart.length}</span></span>
              </NavLink>
            </li>
            <li className="menuItem">
              <HiOutlineSearch onClick={openSearch}/>
            </li>
            
          </ul>
          <div className="mobileMenuItems">
            <HiOutlineSearch onClick={openSearch}/>
            {mobileMenu ? (
              <VscChromeClose onClick={() => setMobileMenu(false)} />
            ) : (
              <SlMenu onClick={openMobileMenu} />
            )}
          </div>
        </div>
      {showSearch && (
        <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for products..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <VscChromeClose onClick={() => setShowSearch(false)} />
          </div>
        </ContentWrapper>
      </div>
      )}
      </div>
    </header>
  );
}
export default Navbar;
