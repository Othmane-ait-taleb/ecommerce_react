import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";

const nav_links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
const Header = () => {
  const style = { nav_item: "font-[500px] cursor-pointer" };
  return (
    <header className="w-full h-[70px] leading-[70px] ">
      <Container className="">
        <Row className=" ">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div className="flex items-center gap-[8px]">
              <img src={logo} alt="" className="w-9 h-9" />
              <div>
                <h1 className="text-[1.2rem] font-[600]">Otaita-Mart</h1>
              </div>
            </div>
            {/* navigation */}
            <div className="">
              <ul className="flex items-center gap-11 mb-0">
                {nav_links.map((item, index) => {
                  return (
                    <li className={style.nav_item} key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "font-semibold" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex items-center gap-8">
              <span class="inline-flex relative items-center p-3 text-sm font-medium text-center text-black  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                <i class="ri-heart-line text-[19px]"></i>
                <div class="inline-flex absolute top-[-1px] right-1 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-black rounded-full border-2 border-white dark:border-gray-900">
                  20
                </div>
              </span>
              <span class="inline-flex relative items-center p-3 text-sm font-medium text-center text-black  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                <i class="ri-shopping-cart-line text-[19px]"></i>
                <div class="inline-flex absolute top-[-1px] right-1 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-black rounded-full border-2 border-white dark:border-gray-900">
                  20
                </div>
              </span>
              <span className="cursor-pointer">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt=""
                  className="h-[30px] w-[30px]"
                />
              </span>
            </div>

            <div className="">
              <span>
                <i class="ri-menu-line hidden"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
