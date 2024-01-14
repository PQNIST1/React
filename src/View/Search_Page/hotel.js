import { React, Component } from "react";
import "./hotel.scss";
import MyDatePicker from "../Home_Page/clendar/clendar";
import imgHotel from "../../../src/assets/images/292129389.jpeg";

class Hotel extends Component {
  state = {
    isCalendarVisible: false,
  };

  handleClickOnShowCalendar = () => {
    this.setState({
      isCalendarVisible: !this.state.isCalendarVisible,
    });
  };

  handleClickHideCalendar = () => {
    this.setState({
      isCalendarVisible: false,
    });
  };
  render() {
    return (
      <>
        <div className="container home-hotel">
          <div className="row img">
            <div className="col-4">
              <img src={imgHotel} className="imgHotel" alt="" />
              <img src={imgHotel} className="imgHotel pt-2" alt="" />
            </div>
            <div className="col-8">
              <img src={imgHotel} className="imgHotel-big" alt="" />
            </div>
          </div>
          <div className="img">
            <img src={imgHotel} className="imgMore pt-2" alt="" />
            <img src={imgHotel} className="imgMore pt-2" alt="" />
            <img src={imgHotel} className="imgMore pt-2" alt="" />
            <img src={imgHotel} className="imgMore pt-2" alt="" />
            <img src={imgHotel} className="imgMore pt-2" alt="" />
          </div>
          <div className="content">
            <p>
              Bạn đủ điều kiện nhận giảm giá Genius tại Cabana Hotel Saigon - 47
              Nguyễn Trãi! Để tiết kiệm tại chỗ nghỉ này, bạn chỉ cần đăng nhập.
            </p>
          </div>
          <div className="row booking">
            <div className="col-12">
              <p className="font-weight-bold">Phòng trống</p>
            </div>
            <div className="content-box col-5 ml-3">
              <div className="box-calendar form-group calendar-input">
                {/* <i class="far fa-calendar-check"></i> */}
                <MyDatePicker />
                {this.state.isCalendarVisible && (
                  <div className="calendar-container"></div>
                )}
              </div>
              <div className="box-reservation">
                <button type="button" class="btn btn-primary">
                  Tìm
                </button>
              </div>
            </div>

            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Loại chỗ nghỉ</th>
                  <th scope="col">Số lượng khách</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Phòng Tiêu Chuẩn Có Giường Cỡ Queen</th>
                  <td>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                  </td>
                  <td>
                    <button type="button" class="btn btn-primary">
                      Hiển thị giá
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Phòng Superior Có Giường Cỡ Queen</th>
                  <td>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                  </td>
                  <td>
                    <button type="button" class="btn btn-primary">
                      Hiển thị giá
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Phòng Deluxe Giường Đôi</th>
                  <td>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                  </td>
                  <td>
                    <button type="button" class="btn btn-primary">
                      Hiển thị giá
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="rate">
              <p className="font-weight-bold font-1">Đánh giá của khách</p>
              <div className="rate-content form-inline">
                <button type="button" className="btn btn-primary b-rate">
                  7,9
                </button>
                <p className="d-flex align-items-center">Tốt</p>
                <p>41 Đánh giá</p>
                <button type="button" class="btn btn-link">
                  Đọc tất cả đánh giá
                </button>
              </div>
              <div className="category">
                <h5>Hạng mục:</h5>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hotel;
