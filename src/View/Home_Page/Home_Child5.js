import React, { Component } from "react";
import Slider from "react-slick";
import "./Home_Child5.scss";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bookingImg from "../../../src/assets/images/292129389.jpeg";
import area from "../../assets/json/area";

class Home_Child5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: "Bãi biển",
    };
  }

  handleButtonClick = (buttonName) => {
    this.setState({
      activeButton: buttonName,
    });
  };
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

    const { activeButton } = this.state;

    return (
      <>
        <div className="home-container5 container">
          <div className="home-content">
            <div className="home-title">
              <h3 className="title-slide">Khám phá Việt Nam</h3>
              <span className="title-content">
                Các điểm đến phổ biến này có nhiều điều chờ đón bạn
              </span>{" "}
              <div className="option">
                <button
                  type="button"
                  className={`btn btn-outline-primary button5 
                    ${activeButton === "Bãi biển" ? "active" : ""}`}
                  onClick={() => this.handleButtonClick("Bãi biển")}
                >
                  <i class="fas fa-umbrella-beach"></i>
                  Bãi biển
                </button>
                <button
                  type="button"
                  className={`btn btn-outline-primary button5 
                    ${activeButton === "Thiên nhiên" ? "active" : ""}`}
                  onClick={() => this.handleButtonClick("Thiên nhiên")}
                >
                  <i class="fas fa-tree"></i>
                  Thiên nhiên
                </button>
                <button
                  type="button"
                  className={`btn btn-outline-primary button5 
                    ${activeButton === "Thành phố" ? "active" : ""}`}
                  onClick={() => this.handleButtonClick("Thành phố")}
                >
                  <i class="fas fa-city"></i>
                  Thành phố
                </button>
                <button
                  type="button"
                  className={`btn btn-outline-primary button5 
                    ${activeButton === "Lãng mạn" ? "active" : ""}`}
                  onClick={() => this.handleButtonClick("Lãng mạn")}
                >
                  <i class="fas fa-heart"></i>
                  Lãng mạn
                </button>
                <button
                  type="button"
                  className={`btn btn-outline-primary button5 
                    ${activeButton === "Thư giãn" ? "active" : ""}`}
                  onClick={() => this.handleButtonClick("Thư giãn")}
                >
                  <i class="fas fa-couch"></i>
                  Thư giãn
                </button>
              </div>
              <div className="home-body row align-items-center">
                <Slider {...settings}>
                {area.map((item,index)=>(
                  <div class="content">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={item.img} className="card-img2" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        {item.name}
                    </div>
                    <span className="title-content d-flex justify-content-center align-items-center">
                      Cách đây {item.km}km
                    </span>
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

export default Home_Child5;
