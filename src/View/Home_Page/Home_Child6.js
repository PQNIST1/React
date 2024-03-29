import React, { Component } from "react";
import Slider from "react-slick";
import "./Home_Child6.scss";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bookingImg from "../../../src/assets/images/292129389.jpeg";
import room from "../../assets/json/room";

class Home_Child6 extends Component {
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
      slidesToShow: 4,
      slidesToScroll: 2,
      prevArrow: <CustomArrow onClick={() => {}} icon={faArrowLeft} />,
      nextArrow: <CustomArrowl onClick={() => {}} icon={faArrowRight} />,
    };
    return (
      <>
        <div className="home-container6 container">
          <div className="home-content">
            <div className="home-title">
              <h3 className="title-slide">
                Lưu trú tại các chỗ nghỉ độc đáo hàng đầu
              </h3>
              <span className="title-content">
                Từ biệt thự, lâu đài cho đến nhà thuyền, igloo, chúng tôi đều có
                hết{" "}
              </span>

              <div className="home-body row align-items-center">
                <Slider {...settings}>
                {room.map((item,index)=>(
                  <div class="card6 card">
                    <img src={item.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">
                        {item.name}
                      </h5>
                      <p class="card-text">{item.address}</p>
                      <button
                        type="button"
                        class="btn btn-primary list-inline mr-2"
                        disabled
                      >
                        {item.rate.point}
                      </button>
                      <p class="card-text list-inline-item">{item.rate.status}</p>
                      <p class="card-text list-inline-item">{item.rate.count} đánh giá</p>
                    </div>
                  </div>
                ))}
                  
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home_Child6;
