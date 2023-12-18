import OnlyHeader from "../Only_Header/Only_Header";
import './delete.css'

export default function DeleteBooking() {
    return (
        <>
            <div className="delete-booking container-fluid">
                <OnlyHeader />
                <div className="delete-content container">
                    <h5>Kiểm tra các thông tin của bạn</h5>
                    <div className="content">
                        <div className="detail">
                            <div className="name">
                                <a href=""><h5>Khách sạn Hương Bình</h5></a>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <div className="choise">
                                    <i class="fas fa-thumbs-up"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="title">
                                <h6>Chi tiết đặt phòng</h6>
                                <p>1 đêm, 1 phòng</p>
                            </div>
                            <div className="title">
                                <h6>Nhận Phòng</h6>
                                <p>Thứ Năm, ngày 23 tháng 2 năm 2023 (14:00 - 20:00)</p>
                            </div>
                            <div className="title">
                                <h6>Trả phòng</h6>
                                <p>Thứ Năm, ngày 23 tháng 2 năm 2023 (14:00 - 20:00)</p>
                            </div>
                            <div className="vat">
                                <div className="vat-title">
                                    <p>1 phòng</p>
                                    <p>10% thuế GTGT</p>
                                    <p>5% Phí dịch vụ của chổ nghỉ</p>
                                </div>
                                <div className="vat-detail">
                                    <p>VND 230.000</p>
                                    <p>VND 23.000</p>
                                    <p>VND 23.000</p>
                                </div>
                            </div>
                            <div className="price">
                                <div className="price-l">
                                    <h5>Giá</h5>
                                </div>
                                <div className="price-r">
                                    <h5>VND 323.000</h5>
                                </div>
                            </div>
                            <div className="note">
                                <h6>Giá cuối cùng được hiển thị là số tiền bạn sẽ thanh toán cho chổ nghĩ</h6>
                                <p>Chùng tôi sẽ không thu phí khách cho bất kỳ đơn đặt phòng nào, phí hành chính hay bất kỳ chi phí nào khác.Đơn vi phát hành thẻ ngân hàng của bạn có thể tính phí giao dịch ngoại hối</p>
                            </div>
                        </div>
                        <div className="del">
                            <h6>Tất cả thông tin có đều chính xác?</h6>
                            <p>Bạn luôn có thể xem hoặc thay đổi đặt phòng trực tuyến - không cần phải đăng ký.</p>
                            <div className="action">
                            <i class="fas fa-times-circle"></i>
                            <a href="">Hủy đặt phòng</a>
                            </div>
                            <div className="action">
                            <i class="fas fa-comment-alt"></i>
                            <a href="">Nhắn tin cho chổ nghĩ</a>
                            </div> <div className="action">
                            <i class="fas fa-calendar-alt"></i>
                            <a href="">Thay đổi này tháng</a>
                            </div>
                            <div className="action">
                            <i class="fas fa-info-circle"></i>
                            <a href="">Thay đổi loại phòng</a>
                            </div>
                            <div className="action">
                            <i class="fas fa-eye"></i>
                            <a href="">Xem đặt phòng</a>
                            </div>
                            <p>Mẹo: Bạn có thể thay đổi đặt phòng này bất cứ lúc nào</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}