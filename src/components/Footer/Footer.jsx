import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import logo from "../../assets/images/eco-logo.png";

const Footer = () => {
	return (
		<footer className='bg-sky-900 mt-4 p-3'>
			<Container>
				<Row>
					<Col lang='4' className='text-white'>
						<div className="flex items-center gap-[8px]">
							<img src={logo} alt="" className="w-9 h-9" />
							<div>
								<h1 className="text-[1.2rem] font-[600]">Otaita-Mart</h1>
							</div>

						</div>
						<p className='mt-3 text-gray-50 text-center'>
							otait_ta web site Reach your customers on their Mobile, Centralize data & Personalize the Customer Journey. Create excellent customer experiences and turn any conversation into an conversion. 24/7 Monitoring & Support. Outperform Expectations. Payment Solutions. Mobile Service Cloud
						</p>
					</Col>
					<Col lang='3'>
						<div>
							<h2 className='text-white font-bold'> Top Categories</h2>
							<ListGroup >
								<ListGroupItem className='px-0 border-0 bg-transparent text-gray-50'>
									<Link to='#'> Mobile Phone</Link>
								</ListGroupItem>

								<ListGroupItem className='px-0 border-0 bg-transparent text-gray-50'>
									<Link to='#'> Modern Sofa</Link>
								</ListGroupItem>

								<ListGroupItem className='px-0 border-0 bg-transparent text-gray-50'>
									<Link to='#'> Arm Chair</Link>
								</ListGroupItem>

								<ListGroupItem className='px-0 border-0 bg-transparent text-gray-50'>
									<Link to='#'> Smart Watches</Link>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
					<Col lang='2'>
						<div>
							<h2 className='text-white font-bold'> Useful Links</h2>
							<ListGroup>
								<ListGroupItem className='px-0 border-0 bg-transparent text-gray-50'>
									<Link to='/shop'> Shop</Link>
								</ListGroupItem>

								<ListGroupItem className='px-0 border-0 bg-transparent text-gray-50'>
									<Link to='/cart'> Cart</Link>
								</ListGroupItem>

								<ListGroupItem className='px-0 border-0 bg-transparent text-gray-50'>
									<Link to='login'> Login</Link>
								</ListGroupItem>
								<ListGroupItem className='px-0 border-0 bg-transparent text-gray-50'>
									<Link to='#'> Privacy Policy</Link>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
					<Col lang='3'>
						<div >
							<h2 className='text-white font-bold'> Contact us</h2>
							<ListGroup >
								<ListGroupItem className='px-0 border-0 bg-transparent text-gray-50'>
									<span><i class="ri-map-pin-line"></i></span>
									<Link to='/shop'> Location</Link>
								</ListGroupItem>

								<ListGroupItem className='px-0 border-0 bg-transparent text-gray-50'>
									<span><i class="ri-mail-line"></i></span>
									<Link to='/cart'> Email</Link>
								</ListGroupItem>

								<ListGroupItem className='px-0 border-0 bg-transparent text-gray-50'>
									<span><i class="ri-instagram-line"></i></span>
									<Link to='login'> instagram</Link>
								</ListGroupItem>
								<ListGroupItem className='px-0 border-0 bg-transparent text-gray-50'>
									<Link to='#'> Privacy Policy</Link>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer