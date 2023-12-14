import './only.css'
export default function OnlyHeader() {
    return (
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
    )
}