import React, { Component } from "react";
import Slider from "react-slick";
import "./Home_Child7.scss";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bookingImg from "../../../src/assets/images/292129389.jpeg";
import place from "../../assets/json/place";

class Home_Child7 extends Component {
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
        <div className="home-container7 container">
          <div className="home-content">
            <div className="home-title">
              <h3 className="title-slide">Nhà ở mà khách yêu thích</h3>

              <div className="home-body row align-items-center">
                <Slider {...settings}>
                {place.map((item,index)=>(
                  <div class="card6 card">
                    <img src={item.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">
                        <div class="e1eebb6a1e e6208ee469 d0caee4251 e714215256">
                          {item.name}
                        </div>{" "}
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
                      <div className="price list-inline">
                        <p className="list-inline-item">Bắt đầu từ</p>
                        <p class="font-weight-bold list-inline-item">
                          VND {item.money}
                        </p>
                      </div>
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

export default Home_Child7;
