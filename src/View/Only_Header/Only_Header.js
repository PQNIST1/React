import { useState, useEffect } from 'react';
import './only.css'
import UserProfile from '../User/userInfo';
export default function OnlyHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleHome = () =>{
    window.location.href ='/'
}
  useEffect(() => {
    // Check if there is an accessToken in localStorage
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);
    return (
        <div className="header-top row">
        <div className="col-3"></div>
        <div className="header-top-left col-2"onClick={handleHome}>
          <span className="font-weight-bolder p-2">Booking.com</span>
        </div>
        <div className="header-top-right col-4 ">
        <div className="row login-contro">
                <span>VND</span>
                <span>Đăng chỗ nghỉ của quý vị</span>
                <div className="contro-login">
                {isLoggedIn ? (
                    // Show logout button if logged in
                    <UserProfile/>

                ) : (
                    // Show register and login buttons if not logged in
                    <>
                        <button type="button" className="btn btn-light mr-4">
                            <a href="/register">Đăng ký</a>
                        </button>
                        <button type="button" className="btn btn-light">
                            <a href="/login">Đăng nhập</a>
                        </button>
                    </>
                )}
                </div>
              </div>
        </div>
        <div className="col-3"></div>
      </div>
    )
}