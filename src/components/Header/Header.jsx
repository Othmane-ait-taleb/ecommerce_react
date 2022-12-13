import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

const Header = () => {
  return (
    <header className="w-full h-[70px] leading-[70px] ">
      <Container className="">
        <Row className=" ">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div className="flex items-center gap-[8px]">
              <img src={logo} alt="" className="w-9 h-9"/>
              <div>
                <h1 className="text-[1.2rem] font-[600]">Otaita-Mart</h1>
                <p className="text-gray-400 font-[200]">Since 2022</p>
              </div>
            </div>
            {/* navigation */}
            <div className="flex-col">
              <ul>
                <li className="nav_item">
                  <NavLink to="home">Home</NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="home">Shop</NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="home">Cart</NavLink>
                </li>
              </ul>
            </div>

            <div>
              <span>
                <i class="ri-heart-line"></i>
              </span>
              <span>
                <i class="ri-shopping-cart-line"></i>
              </span>
              <span>
                <img src={userIcon} alt="" />
              </span>
            </div>

            <div>
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
