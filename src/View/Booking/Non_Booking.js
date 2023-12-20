
import './nbooking.css'

export default function NBooking() {
    return (
        <>
            <div className="N-booking">
                <picture className='pic'>
                    <img src='https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-traveller/TripsGlobe.png'></img>
                </picture>
                <h3>Hiện bạn đang không có chuyến đi nào</h3>
                <p>Trang này thể hiện tất cả các đặt chỗ của bạn. Nếu bạn đã đặt chỗ mà không được hiển thị ở đây, bạn có thể load lại trang để kiểm tra lại.</p>
            </div>
        </>
    )
}