import OnlyHeader from '../Only_Header/Only_Header'
import UserDate from './Date';
import UserGender from './Gender';
import './Info.css'
import UserInfo from './UserInfo'
import { UserData } from './data';
import UserAddress from './user_address';
import UserEmail from './user_email';
import UserPhone from './user_phone';


export default function Info() {
  let data = UserData[0]
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
               <UserInfo title="Tên" value={data.name}/>
               <UserEmail title="Email" value={data.email}/>
               <UserInfo title="Mật khẩu" value={data.password}/>
               <UserPhone title="Số điện thoại" value={data.phone}/>
               <UserDate title="Ngày sinh" value={data.date}/>
               <UserGender title="Giới tính" value={data.gender}/>
               <UserAddress title="Địa chỉ" value={data.address}/>
            </div>
        </div>
    </> 
    )
} 