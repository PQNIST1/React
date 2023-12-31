import React, { Component } from "react";
import Slider from "react-slick";
import "./Home_Child3.scss";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bookingImg from "../../../src/assets/images/292129389.jpeg";

class Home_Child3 extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };

    return (
      <>
        <div className="home-container3 container">
          <div className="home-content">
            <div className="home-title">
              <h3 className="title-slide">Tìm theo loại chỗ nghỉ</h3>

              <div className="home-body row align-items-center">
                <Slider {...settings}>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img3" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Khách sạn
                    </div>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img3" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Khách sạn
                    </div>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img3" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Khách sạn
                    </div>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img3" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Khách sạn
                    </div>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img3" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Khách sạn
                    </div>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img3" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Khách sạn
                    </div>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img3" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Khách sạn
                    </div>
                  </div>
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bookingImg} className="card-img3" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      Khách sạn
                    </div>
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

export default Home_Child3;
