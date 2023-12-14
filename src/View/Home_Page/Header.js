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
                <svg  xmlns="http://www.w3.org/2000/svg" width="20" height='20' fill="white"  viewBox="0 0 24 24"><path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path></svg>
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
            <div className="content-between row">
                <div className="col-3"></div>
                <div className="content-box col-6">
                  <div className="box-search form-group search-input">
                  <svg  xmlns="http://www.w3.org/2000/svg" width="20" height='20' fill="black"  viewBox="0 0 24 24"><path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path></svg>
                    <input type="text" placeholder="Bạn muốn đến đâu ?" />
                  </div>
                  <div className="box-calendar"></div>
                  <div className="box-person"></div>
                </div>
              </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
