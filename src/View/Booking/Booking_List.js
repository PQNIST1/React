import { useEffect, useState } from 'react'
import hotel from '../../assets/json/hotel'
import Card from './Booking_Card'
import './bookinglist.css'
export default function BookingList({value,role}) {
    const [hotel, setHotel] = useState([]);
    useEffect(()=>{
        setHotel(value);
    },[value]);
    return (
        <>
        <div className="booking">
          {role === 'admin' ? (
            <>
              <h4>Chờ xác nhận</h4>
              {hotel.map((user) => (
                <div key={user.id}>
                  {user.booking.map((booking) => (
                    <Card key={booking.id} idData={user._id} hotelData={booking} role={role} />
                  ))}
                </div>
              ))}
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