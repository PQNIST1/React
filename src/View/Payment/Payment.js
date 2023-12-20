import PaymentHeader from "../Only_Header/Payment_Header";
import Check1 from "./check1";
import Check2 from "./check2";
import CountryRegionSelector from "./country";
import EmailValidator from "./email";
import NameInput from "./name";
import './payment.css'
import PhoneNumberInput from "./phone";
export default function Payment() {

    return (
        <>
            <div className="payment container-fluid">
                <PaymentHeader />
                <div className="payment-content container">
                    <div className="left-content">
                        <div className="hotel-content">
                            <div className="icon">
                                <p>Căn hộ</p>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <div className="like">
                                    <i class="fas fa-thumbs-up"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                            <h6>Khách sạn Hương Bình</h6>
                            <p>720A Đường Điện Biên Phủ, Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam</p>
                            <div className="service">
                                <div className="box">
                                    <i class="fas fa-wifi"></i>
                                    <p className="ml-1">WiFi miễn phí</p>
                                </div>
                                <div className="box">
                                    <i class="fas fa-car-side"></i>
                                    <p className="ml-1">Xe đưa đón</p>
                                </div>
                                <div className="box">
                                    <i class="fas fa-swimmer"></i>
                                    <p className="ml-1">Bể bơi</p>
                                </div>
                                <div className="box">
                                    <i class="fas fa-parking"></i>
                                    <p className="ml-1">Bãi đổ xe</p>
                                </div>


                            </div>
                        </div>
                        <div className="time-booking">
                            <h6>Chi tiết đặt phòng của bạn</h6>
                            <div className="time">
                                <div className="time-l">
                                    <h6>Nhận phòng</h6>
                                    <h6>T7, 23 tháng 12 2023</h6>
                                </div>
                                <div className="time-r">
                                    <h6>Trả phòng</h6>
                                    <h6>T7, 23 tháng 12 2023</h6>
                                </div>
                            </div>
                            <p>Tổng thời gian lưu trú:</p>
                            <h6>8 đêm</h6>
                        </div>
                        <div className="hotel-price">
                            <h6 className="pl-3">Tóm tắt giá</h6>
                            <div className="price-content">
                                <div className="price-l">
                                    <h6>Giá gốc</h6>
                                    <h6>Ưu Đãi Cuối Năm</h6>
                                    <p>Bạn nhận được giảm giá vì chỗ nghỉ này đang có ưu đãi.</p>
                                </div>
                                <div className="price-r">
                                    <p>VND 61.020.750</p>
                                    <p>-VND 61.020.750</p>
                                </div>
                            </div>
                            <div className="total-price mt-2">
                                <h4 className="pt-3">Tổng cộng VND 32.951.205</h4>
                                <p>Đã bao gồm thuế và phí</p>
                            </div>
                            <h6 className="pl-3">Thông tin giá</h6>
                            <div className="detail-price">
                                <i class="fas fa-money-bill-wave"></i>
                                <p>Bao gồm VND 2.440.830 phí và thuế</p>

                            </div>
                            <div className="gtgt">
                                <p>8 % Thuế GTGT</p>
                                <p className="vnd-gtgt">VND 2.440.830</p>
                            </div>
                            <div className="detail-price">
                                <i class="fas fa-info-circle"></i>
                                <p className="cost pl-1">Đặt cọc đề phòng hư hại (Được hoàn trả toàn bộ)</p>
                                <p className="vnd">VND 1.000.000</p>
                            </div>
                        </div>
                    </div>
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
                            <h4>Nhập thông tin chi tiết của bạn</h4>
                            <NameInput />
                            <div className="input-more">

                                <EmailValidator />
                                <CountryRegionSelector />
                                <PhoneNumberInput />
                            </div>
                            <div className="line"></div>
                            <div className="booking-for">
                                <Check1 />
                                <Check2 />

                            </div>
                        </div>
                        <div className="note">
                            <h5>Mách nhỏ:</h5>
                            <div className="credit">
                                <svg class="bk-icon -streamline-credit_card_crossed" fill="#008009" height="16" role="presentation" width="16" viewBox="0 0 128 128" aria-hidden="true" focusable="false"><path d="M88.72 108a4 4 0 0 1-4 4H12c-6.627 0-12-5.373-12-12V28a4 4 0 0 1 8 0v12h12.11a4 4 0 0 1 0 8H8v52a4 4 0 0 0 4 4h72.72a4 4 0 0 1 4 4zM116 16H43.1a4 4 0 0 0 0 8H116a4 4 0 0 1 4 4v12H66.86a4 4 0 0 0 0 8H120v52a4 4 0 0 0 8 0V28c0-6.627-5.373-12-12-12zM44.3 64H28a4 4 0 0 0 0 8h16.3a4 4 0 0 0 0-8zM24 84a4 4 0 0 0 4 4h29.88a4 4 0 0 0 0-8H28a4 4 0 0 0-4 4zM6.83 1.17a4.002 4.002 0 1 0-5.66 5.66l120 120a4.002 4.002 0 1 0 5.66-5.66z"></path></svg>
                                <p>Không cần thẻ tín dụng!</p>
                            </div>
                            <div className="credit">
                                <svg class="bk-icon -streamline-checkmark_selected" fill="#008009" height="16" role="presentation" width="16" viewBox="0 0 128 128" aria-hidden="true" focusable="false"><path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path></svg>
                                <p>Linh hoạt: Bạn có thể hủy miễn phí trước ngày nhận phòng 7 ngày, vậy nên hãy chốt mức giá tốt hôm nay.</p>
                            </div>
                            <div className="credit">
                                <svg class="bk-icon -streamline-checkmark_selected" fill="#008009" height="16" role="presentation" width="16" viewBox="0 0 128 128" aria-hidden="true" focusable="false"><path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path></svg>
                                <p>Hôm nay không cần trả tiền. Bạn sẽ thanh toán trong lúc nghỉ.</p>
                            </div>
                        </div>
                        <div className="payment-room">
                            <h5>Phòng Tiêu Chuẩn Giường Đôi</h5>
                            <div>
                                <i class="fas fa-check"></i>
                                Hủy miễn phí trước ngày nhận phòng 7 ngày

                            </div>
                            <div>
                                <svg class="bk-icon -streamline-couple" fill="#262626" height="16" role="presentation" width="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8.25 3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM12 13.5a6 6 0 0 0-12 0v2.25c0 .414.336.75.75.75H3l-.746-.675.75 7.5A.75.75 0 0 0 3.75 24h4.5a.75.75 0 0 0 .746-.675l.75-7.5L9 16.5h2.25a.75.75 0 0 0 .75-.75V13.5zm-1.5 0v2.25l.75-.75H9a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 3 15H.75l.75.75V13.5a4.5 4.5 0 1 1 9 0zm9.75-9.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM13.5 16.5H15l-.746-.675.75 7.5a.75.75 0 0 0 .746.675h4.5a.75.75 0 0 0 .746-.675l.75-7.5L21 16.5h2.25a.75.75 0 0 0 .75-.75V13.5a6 6 0 0 0-11.143-3.086.75.75 0 0 0 1.286.772 4.5 4.5 0 0 1 8.357 2.315v2.249l.75-.75H21a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 15 15h-1.5a.75.75 0 0 0 0 1.5z"></path></svg>Khách: 2 người lớn
                            </div>
                            <div>
                                <svg class="bk-icon -streamline-sparkles" fill="#333333" height="16" role="presentation" width="16" viewBox="0 0 128 128" aria-hidden="true" focusable="false"><path d="M56.08 94C40.76 93.71 34 86.93 34 72a4 4 0 0 0-8 0c0 15-6.85 21.79-22 22a4 4 0 0 0 0 8c15.08 0 21.86 6.8 22 22a4 4 0 0 0 3.92 4H30a4 4 0 0 0 4-3.8c.75-15.14 7.69-22.2 21.83-22.2H56a4 4 0 0 0 .08-8zm-25.84 13.06a22.592 22.592 0 0 0-8.89-9.13A22.62 22.62 0 0 0 30 89.38a22.88 22.88 0 0 0 8.92 8.67 23.504 23.504 0 0 0-8.68 9.01zM124.09 47C94.6 46.34 80.91 32.69 81 4.06V4a4 4 0 0 0-8 0c-.11 28.91-13.8 42.57-43.06 43a4 4 0 0 0 .06 8h.13c29 0 42.58 13.68 42.87 43a4 4 0 0 0 3.93 4H77a4 4 0 0 0 4-3.8C82.45 69.14 96.41 55 123.68 55h.32a4 4 0 0 0 .09-8zM86.83 60.1a43.579 43.579 0 0 0-9.43 15q-6.3-17.72-23.53-24.3a40.922 40.922 0 0 0 13.68-8.61A40.07 40.07 0 0 0 76.92 28q6.49 16.58 23.7 23a40.069 40.069 0 0 0-13.79 9.1z"></path></svg>Phòng cực kỳ sạch
                            </div>
                            <div>
                                <svg class="bk-icon -streamline-no_smoking" fill="#333333" height="16" role="presentation" width="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M19.5 9h2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 0 0 1.5h7.5A2.25 2.25 0 0 0 24 12.75v-3a2.25 2.25 0 0 0-2.25-2.25H19.5a.75.75 0 0 0 0 1.5zM5.25 13.5h-1.5l.75.75v-6L3.75 9h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5zM15 12v2.25a.75.75 0 0 0 1.5 0V12a.75.75 0 0 0-1.5 0zM0 8.25v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0zm1.28 15.53l22.5-22.5A.75.75 0 0 0 22.72.22L.22 22.72a.75.75 0 1 0 1.06 1.06zM4.5.75A2.25 2.25 0 0 1 2.25 3 2.25 2.25 0 0 0 0 5.25a.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75A3.75 3.75 0 0 0 6 .75a.75.75 0 0 0-1.5 0z"></path></svg>Không hút thuốc
                            </div>

                        </div>
                        <div className="button-payment">
                            <button className="btn btn-primary">Xác Nhận đặc phòng </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}