import React, { Component } from "react";
import Slider from "react-slick";
import "./Home_Child7.scss";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bookingImg from "../../../src/assets/images/292129389.jpeg";

class Home_Child7 extends Component {
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
        <div className="home-container7 container">
          <div className="home-content">
            <div className="home-title">
              <h3 className="title-slide">Nhà ở mà khách yêu thích</h3>

              <div className="home-body row align-items-center">
                <Slider {...settings}>
                  <div class="card6 card">
                    <img src={bookingImg} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">
                        <div class="e1eebb6a1e e6208ee469 d0caee4251 e714215256">
                          Aparthotel Stare Miasto
                        </div>{" "}
                      </h5>
                      <p class="card-text">Old Town, Ba Lan, Kraków</p>
                      <button
                        type="button"
                        class="btn btn-primary list-inline mr-2"
                        disabled
                      >
                        8.6
                      </button>
                      <p class="card-text list-inline-item">Tuyệt vời</p>
                      <p class="card-text list-inline-item">293 đánh giá</p>
                      <div className="price list-inline">
                        <p className="list-inline-item">Bắt đầu từ</p>
                        <p class="font-weight-bold list-inline-item">
                          VND 3.099.690
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card6 card">
                    <img src={bookingImg} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">
                        <div class="e1eebb6a1e e6208ee469 d0caee4251 e714215256">
                          Aparthotel Stare Miasto
                        </div>{" "}
                      </h5>
                      <p class="card-text">Old Town, Ba Lan, Kraków</p>
                      <button
                        type="button"
                        class="btn btn-primary list-inline mr-2"
                        disabled
                      >
                        8.6
                      </button>
                      <p class="card-text list-inline-item">Tuyệt vời</p>
                      <p class="card-text list-inline-item">293 đánh giá</p>
                      <div className="price list-inline">
                        <p className="list-inline-item">Bắt đầu từ</p>
                        <p class="font-weight-bold list-inline-item">
                          VND 3.099.690
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card6 card">
                    <img src={bookingImg} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">
                        <div class="e1eebb6a1e e6208ee469 d0caee4251 e714215256">
                          Aparthotel Stare Miasto
                        </div>{" "}
                      </h5>
                      <p class="card-text">Old Town, Ba Lan, Kraków</p>
                      <button
                        type="button"
                        class="btn btn-primary list-inline mr-2"
                        disabled
                      >
                        8.6
                      </button>
                      <p class="card-text list-inline-item">Tuyệt vời</p>
                      <p class="card-text list-inline-item">293 đánh giá</p>
                      <div className="price list-inline">
                        <p className="list-inline-item">Bắt đầu từ</p>
                        <p class="font-weight-bold list-inline-item">
                          VND 3.099.690
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card6 card">
                    <img src={bookingImg} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">
                        <div class="e1eebb6a1e e6208ee469 d0caee4251 e714215256">
                          Aparthotel Stare Miasto
                        </div>{" "}
                      </h5>
                      <p class="card-text">Old Town, Ba Lan, Kraków</p>
                      <button
                        type="button"
                        class="btn btn-primary list-inline mr-2"
                        disabled
                      >
                        8.6
                      </button>
                      <p class="card-text list-inline-item">Tuyệt vời</p>
                      <p class="card-text list-inline-item">293 đánh giá</p>
                      <div className="price list-inline">
                        <p className="list-inline-item">Bắt đầu từ</p>
                        <p class="font-weight-bold list-inline-item">
                          VND 3.099.690
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card6 card">
                    <img src={bookingImg} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">
                        <div class="e1eebb6a1e e6208ee469 d0caee4251 e714215256">
                          Aparthotel Stare Miasto
                        </div>{" "}
                      </h5>
                      <p class="card-text">Old Town, Ba Lan, Kraków</p>
                      <button
                        type="button"
                        class="btn btn-primary list-inline mr-2"
                        disabled
                      >
                        8.6
                      </button>
                      <p class="card-text list-inline-item">Tuyệt vời</p>
                      <p class="card-text list-inline-item">293 đánh giá</p>
                      <div className="price list-inline">
                        <p className="list-inline-item">Bắt đầu từ</p>
                        <p class="font-weight-bold list-inline-item">
                          VND 3.099.690
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card6 card">
                    <img src={bookingImg} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">
                        <div class="e1eebb6a1e e6208ee469 d0caee4251 e714215256">
                          Aparthotel Stare Miasto
                        </div>{" "}
                      </h5>
                      <p class="card-text">Old Town, Ba Lan, Kraków</p>
                      <button
                        type="button"
                        class="btn btn-primary list-inline mr-2"
                        disabled
                      >
                        8.6
                      </button>
                      <p class="card-text list-inline-item">Tuyệt vời</p>
                      <p class="card-text list-inline-item">293 đánh giá</p>
                      <div className="price list-inline">
                        <p className="list-inline-item">Bắt đầu từ</p>
                        <p class="font-weight-bold list-inline-item">
                          VND 3.099.690
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card6 card">
                    <img src={bookingImg} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">
                        <div class="e1eebb6a1e e6208ee469 d0caee4251 e714215256">
                          Aparthotel Stare Miasto
                        </div>{" "}
                      </h5>
                      <p class="card-text">Old Town, Ba Lan, Kraków</p>
                      <button
                        type="button"
                        class="btn btn-primary list-inline mr-2"
                        disabled
                      >
                        8.6
                      </button>
                      <p class="card-text list-inline-item">Tuyệt vời</p>
                      <p class="card-text list-inline-item">293 đánh giá</p>
                      <div className="price list-inline">
                        <p className="list-inline-item">Bắt đầu từ</p>
                        <p class="font-weight-bold list-inline-item">
                          VND 3.099.690
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card6 card">
                    <img src={bookingImg} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">
                        <div class="e1eebb6a1e e6208ee469 d0caee4251 e714215256">
                          Aparthotel Stare Miasto
                        </div>{" "}
                      </h5>
                      <p class="card-text">Old Town, Ba Lan, Kraków</p>
                      <button
                        type="button"
                        class="btn btn-primary list-inline mr-2"
                        disabled
                      >
                        8.6
                      </button>
                      <p class="card-text list-inline-item">Tuyệt vời</p>
                      <p class="card-text list-inline-item">293 đánh giá</p>
                      <div className="price list-inline">
                        <p className="list-inline-item">Bắt đầu từ</p>
                        <p class="font-weight-bold list-inline-item">
                          VND 3.099.690
                        </p>
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

export default Home_Child7;
