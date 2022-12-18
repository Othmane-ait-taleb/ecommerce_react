import { React, useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../Services/Services";
import Clock from "../components/UI/Clock";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";

const Home = () => {
  const year = new Date().getFullYear();
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  
  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="bg-cyan-50 p-10">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div>
                <p className="font-light text-gray-600">
                  Trending product in {year}
                </p>
                <h2 className=" text-[33px] my-3">
                  Make Your interior Monre Minimalistc & Modern
                </h2>
                <p className="font-light text-gray-600">
                  {" "}
                  A product description is the marketing copy that explains what
                  a product is and why it's worth purchasing. The purpose of a
                  product description is to supply customers with important
                  information about the features and key benefits of the product
                  so they're compelled to buy
                </p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="px-3 py-2 my-4 rounded-md bg-black text-white"
                >
                  <Link to="/shop" className="hover:text-white">
                    SHOP NOW
                  </Link>
                </motion.button>
              </div>
            </Col>
            <Col md="2" lg="6">
              <img src={heroImg} alt="hero img" />
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="text-center font-bold p-5 text-2xl">
                Trending Products
              </h1>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="text-center font-bold p-5 text-2xl">Best Sales</h1>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="h-[300px] bg-sky-900 mt-1 ">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="6" className="pt-8">
              <div>
                <h4 className="text-white m-3 mb-2 font-extralight">
                  Limited Offers
                </h4>
                <h3 className="text-white m-3 mt-0">Quality Armchairy</h3>
              </div>
              <Clock />
              <button className="bg-white rounded-md w-32 h-9 text-gray-700 m-3">
                <Link to="/shop" className="hover:text-black font-medium">
                  Visit Store
                </Link>
              </button>
            </Col>
            <Col lg="6" md="6" sm="6" xs="6" className="text-end ">
              <img
                src={counterImg}
                alt="counter "
                className=" object-contain  w-[90%] h-[70%]"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="text-center font-bold p-5 text-2xl">
                New Arrivals
              </h1>
            </Col>
			<ProductsList data={mobileProducts} />
			<ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
