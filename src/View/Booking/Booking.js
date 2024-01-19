import OnlyHeader from "../Only_Header/Only_Header";
import BookingList from "./Booking_List";
import NBooking from "./Non_Booking";
import './booking.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Booking() {
    const [user, setUser] = useState({});
    const [hotel, setHotel] = useState({});

    const shouldDisplayContent = hotel.length > 0;
    const [userBookings, setUserBookings] = useState([]);

    useEffect(() => {
      const fetchUserBookings = async () => {
        try {
          const response = await axios.get('http://localhost:8000/user/booking');
          setUserBookings(response.data);
        } catch (error) {
          console.error('Error fetching user bookings:', error.message);
        }
      };
  
      fetchUserBookings();
    }, []);
console.log(userBookings);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Lấy accessToken từ localStorage
                const accessToken = localStorage.getItem('accessToken');
                
                // Gọi API để lấy thông tin người dùng
                const response = await axios.get('http://localhost:8000/user', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                // Lưu thông tin người dùng vào state
                setUser(response.data);
                setHotel(response.data.booking);
            } catch (error) {
                console.error('Error fetching user:', error.message);
            }
        };

        fetchUser();
    }, []);
    return (
        <>
        <div className="booking-container container-fluid">
            <OnlyHeader/>
            <div className="booking_content container">
                {shouldDisplayContent || user.role==='admin' ? (
                        <BookingList value={user.role === 'admin'? userBookings: hotel} role={user.role}/>
                ):(
                    <NBooking/>
                )}      
            </div>
        </div>
            
        </>
    )
}