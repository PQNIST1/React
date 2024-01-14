import React, { Component } from "react";
import Slider from "react-slick";
import "./Home_Child2.scss";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bookingImg from "../../../src/assets/images/292129389.jpeg";

class Home_Child2 extends Component {
  render() {
    const CustomArrow = ({ onClick, icon }) => (
      <button onClick={onClick} className="custom-arrow">
        <FontAwesomeIcon icon={icon} size="1x" />
      </button>
    );
    const CustomArrowl = ({ onClick, icon }) => (
      <button onClick={onClick} className="custom-arrowl">
        <FontAwesomeIcon icon={icon} size="1x" />
      </button>
    );
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      prevArrow: <CustomArrow onClick={() => {}} icon={faArrowLeft} />,
      nextArrow: <CustomArrowl onClick={() => {}} icon={faArrowRight} />,
    };

    return (
      <>
        <div className="home-container2 container">
          <div className="home-content">
            <div className="home-title">
              <h3 className="title-slide">Khám phá Việt Nam</h3>
              <span className="title-content">
                Các điểm đến phổ biến này có nhiều điều chờ đón bạn
              </span>
              <div className="home-body row align-items-center">
                <Slider {...settings}>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img2" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Đà Nẵng
                    </div>
                    <span className="title-content d-flex justify-content-center align-items-center">
                      2145 chỗ nghỉ
                    </span>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img2" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Đà Nẵng
                    </div>
                    <span className="title-content d-flex justify-content-center align-items-center">
                      2145 chỗ nghỉ
                    </span>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img2" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Đà Nẵng
                    </div>
                    <span className="title-content d-flex justify-content-center align-items-center">
                      2145 chỗ nghỉ
                    </span>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img2" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Đà Nẵng
                    </div>
                    <span className="title-content d-flex justify-content-center align-items-center">
                      2145 chỗ nghỉ
                    </span>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img2" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Đà Nẵng
                    </div>
                    <span className="title-content d-flex justify-content-center align-items-center">
                      2145 chỗ nghỉ
                    </span>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img2" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Đà Nẵng
                    </div>
                    <span className="title-content d-flex justify-content-center align-items-center">
                      2145 chỗ nghỉ
                    </span>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img2" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Đà Nẵng
                    </div>
                    <span className="title-content d-flex justify-content-center align-items-center">
                      2145 chỗ nghỉ
                    </span>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img2" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Đà Nẵng
                    </div>
                    <span className="title-content d-flex justify-content-center align-items-center">
                      2145 chỗ nghỉ
                    </span>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home_Child2;
