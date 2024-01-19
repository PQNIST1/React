import React, { Component } from "react";
import bookingImg from "../../../src/assets/images/292129389.jpeg";
import "./Home_Child4.scss";

class Home_Child4 extends Component {
  render() {
    return (
      <>
        <div className="home-container4 container">
          <div className="home-title">
            <h3 className="title-slide">Điểm đến đang thịnh hành</h3>
            <span className="title-content">
              Các lựa chọn phổ biến nhất cho du khách từ Việt Nam
            </span>
            <div className="home-content4 home-top row mt-2">
              <div className="col mx-2 col-with-bg">
                <p class="font-weight-bold">TP.Hồ Chí Minh</p>
              </div>

              <div className="col mx-2 col-with-bg1">
                <p class="font-weight-bold">Đà Nẵng</p>
              </div>
            </div>
            <div className="home-content4 home-bot row my-3">
              <div className="col mx-2 col-with-bg2">
                <p class="font-weight-bold">Hà Nội</p>
              </div>

              <div className="col mx-2 col-with-bg3">
                <p class="font-weight-bold">Đà Lạt</p>
              </div>
              <div className="col mx-2 col-with-bg4">
                <p class="font-weight-bold">Vũng Tàu</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home_Child4;
