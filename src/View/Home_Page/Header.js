import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header-container container-fluid">
          <div className="header-content">
            <div className="header-top row">
              <div className="col-3"></div>
              <div className="header-top-left col-2">
                <span className="font-weight-bolder p-2">Booking.com</span>
              </div>
              <div className="header-top-right col-4 ">
                <span>VND</span>
                <span>Đăng chỗ nghỉ của quý vị</span>
                <button type="button" class="btn btn-light mr-4">
                  Đăng ký
                </button>
                <button type="button" class="btn btn-light">
                  Đăng nhập
                </button>
              </div>
              <div className="col-3"></div>
            </div>
            <div className="header-body row">
              <div className="col-3"></div>
              <div className="header-body-left col-7">
                <button type="button" class="btn text-white">
                  <i class="fas fa-bed"></i>
                  Lưu trú
                </button>
                <span>
                  <i class="fas fa-plane"></i>
                  Chuyến bay
                </span>
                <span>
                  <i class="fas fa-globe-asia"></i>
                  Chuyến bay + Khách sạn
                </span>
                <span>
                  <i class="fas fa-car"></i>
                  Thuê xe
                </span>
                <span>
                  <i class="fas fa-map"></i>
                  Địa điểm tham quan
                </span>
                <span>
                  <i class="fas fa-taxi"></i>
                  Taxi sân bay
                </span>
              </div>
            </div>
            <div className="header-bot">
              <div className="content-up row">
                <div className="col-3"></div>
                <div className="title-top font-weight-bolder col-9">
                  Tìm chỗ nghỉ tiếp theo
                </div>
                <div className="col-3"></div>
                <div className="title-bot font-weight-bolder col-9">
                  Tìm ưu đãi khách sạn, chỗ nghỉ dạng nhà và nhiều hơn nữa...
                </div>
              </div>
              <div className="content-between row">
                <div className="col-3"></div>
                <div className="content-box col-6">
                  <div className="box-search form-group search-input">
                    <i class="fas fa-bed"></i>
                    <input type="text" placeholder="Bạn muốn đến đâu ?" />
                  </div>
                  <div className="box-calendar"></div>
                  <div className="box-person"></div>
                </div>
              </div>
              <div className="content-down row">
                <div className="col-3"></div>
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck">
                    Tôi đi công tác
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
