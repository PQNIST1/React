import React, { Component } from "react";
import MyDatePicker from "../Home_Page/clendar/clendar";
import "./custom_Header.scss";
import jsonData from "../../assets/json/cities";
import UserProfile from "../User/userInfo";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: false,
        isAttributesVisible: false,
        selectedAttribute: ''
    };
}
handleHomeSearch = () => {
  const { selectedAttribute } = this.state;
  window.location.href = `/hotels/${selectedAttribute}`;
}
componentDidMount() {
  // Check if there is an accessToken in localStorage
  document.addEventListener('click', this.handleDocumentClick);
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
      this.setState({ isLoggedIn: true });
  }
}
handleClickShowAttributes = (e) => {
  e.stopPropagation();
  this.setState({ isAttributesVisible: !this.state.isAttributesVisible });
};

handleAttributeClick = (attribute) => {
  this.setState({ selectedAttribute: attribute, isAttributesVisible: false });
};
handleDocumentClick = () => {
  if (this.state.isAttributesVisible) {
    this.setState({ isAttributesVisible: false });
  }
};
handleHome() {
  window.location.href ="/"
 }

componentWillUnmount() {
  document.removeEventListener('click', this.handleDocumentClick);
}
  
  renderAttributesList() {
    const attributes = jsonData.map(item => item.name);

    return (
      <ul className="list-group">
        <li className="list-group-item font-weight-bold">
          Các địa điểm được ưa thích gần đây
        </li>
        {attributes.map((attribute, index) => (
          <li key={index} className="list-group-item"onClick={() => this.handleAttributeClick(attribute)}>
            <i class="fas fa-map-marker-alt"></i>
            {attribute}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <>
        <div className="header-container-new container-fluid">
          <div className="header-content">
            <div className="header-top row">
              <div className="col-3"></div>
              <div className="header-top-left col-2"onClick={this.handleHome}>
                <span className="font-weight-bolder p-2">Booking.com</span>
              </div>
              <div className="header-top-right col-4 ">
              <div className="row login-contro">
                <span>VND</span>
                <span>Đăng chỗ nghỉ của quý vị</span>
                <div className="contro-login">
                {isLoggedIn ? (
                    // Show logout button if logged in
                    <UserProfile/>

                ) : (
                    // Show register and login buttons if not logged in
                    <>
                        <button type="button" className="btn btn-light mr-4">
                            <a href="/register">Đăng ký</a>
                        </button>
                        <button type="button" className="btn btn-light">
                            <a href="/login">Đăng nhập</a>
                        </button>
                    </>
                )}
                </div>
              </div>
              </div>
              <div className="col-3"></div>
            </div>
            <div className="header-body row">
              <div className="col-3"></div>
              <div className="header-body-left col-8">
                <button type="button" class="btn text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path>
                  </svg>
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
            <div className="content-between row">
              {/* <div className="col-3"></div> */}
              <div className="content-box col-7">
                <div
                  className="box-search form-group search-input"
                  onClick={this.handleClickShowAttributes}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path>
                  </svg>
                  <input type="text" placeholder="Bạn muốn đến đâu ?" value={this.state.selectedAttribute}/>
                </div>
                {this.state.isAttributesVisible && (
                  <div
                    className="custom-card"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="card-body">
                      {this.renderAttributesList()}
                    </div>
                  </div>
                )}
                <div className="box-calendar form-group calendar-input">
                  {/* <i class="far fa-calendar-check"></i> */}
                  <MyDatePicker />
                  {this.state.isCalendarVisible && (
                    <div className="calendar-container"></div>
                  )}
                </div>
                <div className="box-reservation">
                  <button type="button" class="btn btn-primary" onClick={this.handleHomeSearch}>
                    Tìm
                  </button>
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
