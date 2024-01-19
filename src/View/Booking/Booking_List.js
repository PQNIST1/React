import { useEffect, useState } from 'react'
import hotel from '../../assets/json/hotel'
import Card from './Booking_Card'
import './bookinglist.css'
import NBooking from './Non_Booking';
export default function BookingList({value,role,set}) {
    const [hotel, setHotel] = useState([]);
    useEffect(()=>{
        setHotel(value);
    },[value]);
    const trueBookings = hotel.reduce((acc, user) => {
        const userConfirmedBookings = user.booking.filter((booking) => booking.status === true);
        return acc + userConfirmedBookings.length;
      }, 0);
      const falseBookings = hotel.reduce((acc, user) => {
        const userConfirmedBookings = user.booking.filter((booking) => booking.status === false);
        return acc + userConfirmedBookings.length;
      }, 0);
    console.log(trueBookings);
    return (
        <>
        <div className="booking">
          {role === 'admin'? (
            <>
            {set?(
                <>
                {trueBookings > 0 ?(
                    <>
                    <h4>Đã được xác nhận</h4> 
                    {hotel.map((user) => (
                <div key={user.id}>
                  {user.booking.map((booking) => (
                    booking.status && (
                    <Card key={booking.id} idData={user._id} hotelData={booking} role={role} />
                  )
                  ))}
                </div>
              ))}
                    </>
                ):(
                    <NBooking/>
                )}
             
            </>
            ):(
                <>
                {falseBookings > 0 ?(
                    <>
                    <h4>Chờ xác nhận</h4> 
              {hotel.map((user) => (
                <div key={user.id}>
                  {user.booking.map((booking) => (
                    !booking.status && (
                    <Card key={booking.id} idData={user._id} hotelData={booking} role={role} />
                  )
                  ))}
                </div>
              ))}
                    </>
                ):(
                    <NBooking/>
                )}
             
            </>
            )}
            </>
          ) : (
            <>
              <h4>Tóm tắt đơn đặt</h4>
              {hotel.map((item) => (
                <Card key={item.id} hotelData={item} />
              ))}
            </>
          )}
        </div>
      </>      
    )
}