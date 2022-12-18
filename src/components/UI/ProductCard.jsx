import React from "react";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Col lg="3" md="4">
      <motion.div
        whileHover={{ scale: 0.9 }}
        className="cursor-pointer border-black border-[0.1px] rounded overflow-hidden shadow-md mt-7 min-h-[330px] "
      >
        <div>
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt="chair image" 
          />
        </div>
        <div className="text-left p-2">
          <h1 className="text-[1.1rem] font-[400] pt-4 ">
            <Link
              to={`/shop/${item.id}`}
              className="hover:font-[300] hover:text-black"
            >
              {item.productName}
            </Link>
          </h1>
          <span className="text-right font-extralight text-sm p-0 m-0">
            {item.category}
          </span>
        </div>
        <div className="flex items-center justify-between p-1">
          <span className="text-base">${item.price}</span>
          <motion.span
            className="bg-black text-white w-6 h-6 text-center rounded-3xl"
            whileTap={{ scale: 1.2 }}
          >
            <i class="ri-add-line"></i>
          </motion.span>
        </div>
      </motion.div>
    </Col>
  );
};

export default ProductCard;
