import OnlyHeader from "../Only_Header/Only_Header";
import BookingList from "./Booking_List";
import NBooking from "./Non_Booking";

export default function Booking() {
    return (
        <>
        <div className="booking-container container_fluid">
            <OnlyHeader/>
            <div className="booking_content container">
                {/* <NBooking/> */}
                <BookingList/>
            </div>
        </div>
            
        </>
    )
}