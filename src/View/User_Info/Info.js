import OnlyHeader from '../Only_Header/Only_Header'
import UserDate from './Date';
import UserGender from './Gender';
import './Info.css'
import UserInfo from './UserInfo'   
import UserAddress from './user_address';
import UserEmail from './user_email';
import UserPhone from './user_phone';
import axios from 'axios';
import updateUserData from './userDate';
import { useState, useEffect } from 'react';
import UserPassword from './Userpassword';

export default function Info() {
    const [user, setUser] = useState({});
    const [infoUser, setinfoUser] = useState({});
    const [infoUserPhone, setinfoUserPhone] = useState('');
    const [infoUserDate, setinfoUserDate] = useState('');
    const [infoUserAddress, setinfoUserAddress] = useState('');
    const [infoUserGender, setinfoUserGender] = useState('');
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
                setinfoUser(response.data.infoUser);
                setinfoUserAddress(response.data.infoUser.address);
                setinfoUserPhone(response.data.infoUser.phone);
                setinfoUserDate(response.data.infoUser.dateofbirth);
                setinfoUserGender(response.data.infoUser.sex);
            } catch (error) {
                console.error('Error fetching user:', error.message);
            }
        };

        fetchUser();
    }, []);
    const handleUpdateUser = (updatedData) => {
        // You can add logic here to update the state or perform other actions
        console.log('Updating user data:', updatedData);
        updateUserData(updatedData);
      };
   return (
        <>
        <div className="info-container container-fluid">
        <OnlyHeader/>
            <div className="info-content container">
                <div className='user-info row'>
                     <div className='col-10 text p-0'>
                        <h3><span className='font-weight-bolder'>Thông tin cá nhân</span></h3>
                        <p>Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.</p>
                    </div> 
                    <div className='col-1 avatar p-0'>
                        <button type="button"><img src='https://q-xx.bstatic.com/xdata/images/xphoto/square128/296828436.jpg?k=accd6bfd812eb8dcd6c2449c3720ea5538cb5ac84d20c7cde972329c73d3a003&amp;o=' alt=''></img></button>
                    </div>
                </div>
               <UserInfo title="Tên" value={user.name} onUpdate={handleUpdateUser}/>
               <UserEmail title="Email" value={user.email} onUpdate={handleUpdateUser}/>
               <UserPassword title="Mật khẩu" value={'11111111'} onUpdate={handleUpdateUser}/>
               <UserPhone title="Số điện thoại" value={infoUserPhone} onUpdate={handleUpdateUser}/>
               <UserDate title="Ngày sinh" value={infoUserDate} onUpdate={handleUpdateUser}/>
               <UserGender title="Giới tính" value={infoUserGender} onUpdate={handleUpdateUser}/>
               <UserAddress title="Địa chỉ" value={infoUserAddress} onUpdate={handleUpdateUser}/>
            </div>
        </div>
    </> 
    )
} 