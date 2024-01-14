import React, { Component } from "react";
import Slider from "react-slick";
import "./Home_Child1.scss";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bookingImg from "../../../src/assets/images/292129389.jpeg";

class Home_Child1 extends Component {
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
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: <CustomArrow onClick={() => {}} icon={faArrowLeft} />,
      nextArrow: <CustomArrowl onClick={() => {}} icon={faArrowRight} />,
    };

    return (
      <>
        <div className="home-container container">
          <div className="home-content">
            <div className="home-title">
              <h3 className="title-slide">Ưu đãi</h3>
              <span className="title-content">
                Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn
              </span>
              <div className="home-body row align-items-center">
                <Slider {...settings}>
                  <div className="card">
                    <div className="row no-gutters">
                      <div className="col-4">
                        <img src={bookingImg} alt="" className="" />
                      </div>
                      <div class="col-8">
                        <div class="card-body">
                          <h5 class="card-title">
                            Thoải mái như ở nhà suốt kỳ nghỉ dài
                          </h5>
                          <p class="card-text">
                            Lựa chọn trong các chỗ nghỉ hoàn hảo để làm việc,
                            thư giãn hoặc cả hai
                          </p>
                          <button type="button" class="btn btn-primary">
                            Tìm chỗ nghỉ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-background card rounded overflow-hidden">
                    <div className="content row no-gutters">
                      <div className="col-12 custom-col12">
                        <div className="card-body">
                          <h5 class="card-title">Năm mới, hành trình mới</h5>
                          <p class="card-text">
                            Tiết kiệm từ 15% khi đặt và lưu trú trước 1/4/2024
                          </p>
                          <button type="button" class="btn btn-primary">
                            Tìm ưu đãi năm 2024
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row no-gutters">
                      <div className="col-4">
                        <img src={bookingImg} alt="" className="" />
                      </div>
                      <div class="col-8">
                        <div class="card-body">
                          <h5 class="card-title">
                            Thoải mái như ở nhà suốt kỳ nghỉ dài
                          </h5>
                          <p class="card-text">
                            Lựa chọn trong các chỗ nghỉ hoàn hảo để làm việc,
                            thư giãn hoặc cả hai
                          </p>
                          <button type="button" class="btn btn-primary">
                            Tìm chỗ nghỉ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row no-gutters">
                      <div className="col-4">
                        <img src={bookingImg} alt="" className="" />
                      </div>
                      <div class="col-8">
                        <div class="card-body">
                          <h5 class="card-title">
                            Thoải mái như ở nhà suốt kỳ nghỉ dài
                          </h5>
                          <p class="card-text">
                            Lựa chọn trong các chỗ nghỉ hoàn hảo để làm việc,
                            thư giãn hoặc cả hai
                          </p>
                          <button type="button" class="btn btn-primary">
                            Tìm chỗ nghỉ
                          </button>
                        </div>
                      </div>
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

export default Home_Child1;
