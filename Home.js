import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../../components/Card/Card"
import Button from '@mui/material/Button';
import NavigationBar from "../../components/NavigationBar/NavigationBar"
import { Form, Carousel, Modal, Button as Button2 } from 'react-bootstrap';
import Carousel2 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <NavigationBar/>
      <div className={'container mt-4'}>
        <div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {[11, 2, 36, 5, 8, 9, 8].map((item, index) => (
              <Carousel.Item  style={{ height: 500, width: '100%' }}>
                <img
                  objectFit="cover"
                  className="d-block w-100"
                  src={`https://foodish-api.herokuapp.com/images/butter-chicken/butter-chicken${
                    index + 1
                  }.jpg`}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="row my-5 text-center">
          <h3>Our Products</h3>
        </div>
        <div
          className="row  justify-content-center align-items-center"
          style={{}}
        >
          <div>
            <Form.Select
              size="sm"
              aria-label="Default select example"
              style={{ width: 150 }}
            >
              <option>CATEGORY 1</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>

          <Carousel2
            className="py-2"
            swipeable={true}
            responsive={{
              superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
              },
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 8, 9, 10].map((item, index) => (
              <div>
                <Card index={index} />
              </div>
            ))}
          </Carousel2>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="row my-5 text-center">
            <h3> About Us</h3>
          </div>
          <div className="row">
            <div className="col-sm" style={{ height: '400px' }}>
              <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2VvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="col-sm" style={{ height: '400px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.WEDHFJDKOPSSPSPSPPPSPSPSPPP FHJDUEOEOEOEO EJIEOELLKA
              DFFOFOE EJEIORL FKEOEOENE FJEIOEOE JRORPRPRPPR Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna
              aliqua.WEDHFJDKOPSSPSPSPPPSPSPSPPP FHJDUEOEOEOEO EJIEOELLKA
              DFFOFOE EJEIORL FKEOEOENE FJEIOEOE JRORPRPRPPR
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="row my-5 text-center">
            <h3> Contact Us</h3>
          </div>
          <div
            className="row justify-content-center align-item-center mb-2"
            style={{ backgroundColor: '#F4F4F4' }}
          >
            <div className="row my-4">
              {[1, 2, 3].map((item, index) => (
                <div className="col-sm py-2 d-flex justify-content-center align-item-center">
                  <div className="row">
                    <label
                      htmlFor="exampleInputEmail1"
                      style={{ fontWeight: 'bold', paddingLeft: 0 }}
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      style={{ backgroundColor: '#C4C4C4', borderRadius: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="row my-1">
              {[1, 2, 3].map((item, index) => (
                <div className="col-sm py-2 d-flex justify-content-center align-item-center">
                  <div className="row">
                    <label
                      htmlFor="exampleInputEmail1"
                      style={{ fontWeight: 'bold', paddingLeft: 0 }}
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      style={{
                        backgroundColor: '#C4C4C4',
                        borderRadius: 0,
                        width: '100%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="row justify-content-center my-3">
              <Button
                variant="contained"
                style={{ width: '200px', backgroundColor: 'black' }}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
        <footer
          style={{}}
          className="bg-light text-center text-lg-start"
        >
          <div
            className="text-center d-flex justify-content-center align-items-center container-fluid"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              height: '200px',
              width: '100vw',
              position: 'relative',
              marginLeft: '-50vw',
              left: '50%',
            }}
          >
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">
              Footer
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
