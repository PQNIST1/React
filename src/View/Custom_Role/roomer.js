import PaymentHeader from "../Only_Header/Payment_Header"
import HotelRegionSelector from "./hotel_region"
import HottelInput from "./hottel_name"
import './rent.css'
import HotelPhoneInput from "./hottel_phone"
import Check from "./check"
import RoomTypeSelector from "./chose_room"
import ImageUploader from "./image_upload"
import MultiImageUploader from "./image_upload"
import RoomForm from "./room"
export default function Rent() {
    return (
        <>
            <div className="payment container-fluid">
                <PaymentHeader />
                <div className="payment-content container">
                    <div className="right-content">
                        <div className="email-login">
                            <div className="email-pic">
                                <img src='https://q-xx.bstatic.com/xdata/images/xphoto/square128/296828436.jpg?k=accd6bfd812eb8dcd6c2449c3720ea5538cb5ac84d20c7cde972329c73d3a003&amp;o=' alt=""></img>
                            </div>
                            <div className="email-content">
                                <h6>Bạn đã được đăng nhập</h6>
                                <p>nguyenpham23476@gmail.com</p>
                            </div>
                        </div>
                        <div className="payment-form">
                            <h4>Nhập thông tin chổ nghỉ của bạn</h4>
                            <HottelInput />
                            <div className="input-more">
                                <HotelPhoneInput />
                                <HotelRegionSelector />
                            </div>
                            <div className="line"></div>
                            <div className="booking-for">
                                <Check />
                            </div>
                        </div>
                        <div className="note">
                        <h5>Đăng ký phòng</h5>
                        <div className="line"></div>
                            <RoomForm/>
                        </div>
                        <div className="payment-room">
                            <h5>Hình ảnh chổ nghỉ</h5>
                            <div className="line"></div>
                          <MultiImageUploader/>

                        </div>
                        <div className="button-payment">
                            <button className="btn btn-primary">Xác Nhận cho thuê phòng </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}