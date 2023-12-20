import OnlyHeader from "../Only_Header/Only_Header";
import BookingList from "./Booking_List";
import NBooking from "./Non_Booking";
import './booking.css'

export default function Booking() {
    return (
        <>
        <div className="booking-container container-fluid">
            <OnlyHeader/>
            <div className="booking_content container">
                {/* <NBooking/> */}
                <BookingList/>
            </div>
        </div>
            
        </>
    )
}