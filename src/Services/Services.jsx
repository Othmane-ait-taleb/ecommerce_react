import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section>
      <Container>
        <Row>
          {serviceData.map((item, index) => {
            return (
              <Col lg="3" md="4" key={index}>
                <motion.div whileHover={{ scale: 1.1 }}
                  className={`p-3 mt-6  bg-[#e2f2b2] flex items-center gap-3 `}
                >
                  <span>
                    <i
                      class={`${item.icon}  text-[30px] rounded-3xl cursor-pointer bg-black text-white p-2`}
                    ></i>
                  </span>
                  <div>
                    <h3 className="text-[20px]">{item.title} </h3>
                    <p className="font-light text-[12px] mt-2">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
