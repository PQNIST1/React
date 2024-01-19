import React, { useState, useEffect, useRef} from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const handleLogout = () => {
        // Clear the authentication token from localStorage or wherever it is stored
        localStorage.removeItem('accessToken');
    
        // Redirect the user to the login page or any other desired page
        window.location.href = '/login';
      };

    const handleInfo = () =>{
        if(user.role==='user'){
            window.location.href ='/info'
        } else if(user.role==='admin'){
            window.location.href ='/info'
        } else {
            window.location.href ='/booking'

        }
    }
    const handleRoom = () =>{
        if(user.role==='user'){
            window.location.href ='/booking'
        } else if(user.role==='admin'){
            window.location.href ='/booking'
        } else {
            window.location.href ='/booking/rent'
        }
    }

    const closeMenu = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        // Đăng ký sự kiện click trên toàn bộ trang
        document.addEventListener('click', closeMenu);

        // Hủy đăng ký sự kiện khi component unmount
        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, []); //
    const toggleMenu = () => {
        setShowMenu(!showMenu);
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

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
<button type="button" className="btn btn-light info-button" onClick={toggleMenu}>
                      <div className='row' ref={menuRef}>
            <img src='https://i.imgur.com/xjadIW0.jpg'alt='#'/>
            <div>
            <h5>{user.name}</h5>
            <p>vip pro</p>
            </div>
            
        </div>   
                    </button>
                     {showMenu && (
                        
                        <div className="user-info-menu">
                        {user.role === 'admin' && (
                            <>
                            <div>
                        <button onClick={handleInfo}><i class="fas fa-hotel"></i> Quản lý đặt chổ</button>
                        </div>
                        <div>
                        <button onClick={handleRoom}><i class="fas fa-bed"></i> Quản lý phòng</button>
                        </div>
                            </>
                        )}
                        {user.role === 'user' && (
                            <>
                            <div>
                        <button onClick={handleInfo}><i class="far fa-user"></i>  Quản lý tài khoản</button>
                        </div>
                        <div>
                        <button onClick={handleRoom}><i class="fas fa-briefcase"></i> Đặt chổ</button>
                        </div>
                            </>
                        )}
                        {user.role === 'rent' && (
                            <>
                            <div>
                        <button onClick={handleInfo}><i class="fas fa-hotel"></i>  Quản lý phòng cho thuê</button>
                        </div>
                        <div>
                        <button onClick={handleRoom}><i class="fas fa-bed"></i>Cho thuê</button>
                        </div>
                            </>
                        )}
                        
                        <div>
                        <button onClick={handleLogout}><i class="fas fa-sign-out-alt"></i>  Đăng xuất</button>
                        </div>
                        
                        </div>
                    )}
        </>
        
       
    );
};

export default UserProfile;
