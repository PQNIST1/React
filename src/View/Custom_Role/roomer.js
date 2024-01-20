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
    import axios from "axios"
    import { useState,useEffect } from "react"
    import HotelDetails from "./hotel_detail"
    export default function Rent() {
        const [user, setUser] = useState({});
        const [hotelData, setHotelData] = useState({
            name: '',
            image: [],
            title: '',
            detail: '',
            address: {
                'province':"",
                's_address':"",
            },
            rank: '',
            extension: [{}],
            rom: {},
          });
        const handleHotelDataChange = (field, value) => {
            setHotelData({
              ...hotelData,
              [field]: value,
            });
          };
          console.log(hotelData);
          const handleConfirmRent = async () => {
            try {
              const accessToken = localStorage.getItem('accessToken');
              const response = await axios.post('http://localhost:8000/hotels', hotelData, {
                headers: {
                  'Authorization': `Bearer ${accessToken}`,
                  'Content-Type': 'application/json',
                },
              });
          
              console.log(response.data); 
              window.location.href = "/booking"
            } catch (error) {
              console.error('Error creating hotel:', error);
            }
          };
            
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
                } catch (error) {
                    console.error('Error fetching user:', error.message);
                }
            };

            fetchUser();
        }, []);
        
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
                                    <p>{user.email}</p>
                                </div>
                            </div>
                            <div className="payment-form">
                                <h4>Nhập thông tin chổ nghỉ của bạn</h4>
                                <HottelInput onChange={handleHotelDataChange}/>
                                <div className="input-more">
                                    <HotelPhoneInput />
                                    <HotelRegionSelector onChange={handleHotelDataChange}/>
                                    <HotelDetails onChange={handleHotelDataChange}/>
                                </div>
                                <div className="line"></div>
                                <div className="booking-for">
                                    <Check />
                                </div>
                            </div>
                            <div className="note">
                            <h5>Đăng ký phòng</h5>
                            <div className="line"></div>
                                <RoomForm onChange={handleHotelDataChange}/>
                            </div>
                            <div className="payment-room">
                                <h5>Hình ảnh chổ nghỉ</h5>
                                <div className="line"></div>
                            <MultiImageUploader onChange={handleHotelDataChange}/>
                            </div>
                            <div className="button-payment">
                                <button className="btn btn-primary" onClick={handleConfirmRent}>Xác Nhận cho thuê phòng </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }