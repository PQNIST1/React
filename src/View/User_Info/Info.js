import OnlyHeader from '../Only_Header/Only_Header'
import './Info.css'

export default function Info() {
    return (
        <>
        <div className="info-container container-fluid">
        <OnlyHeader/>
            <div className="info-content container">
                <div className='user-info row'>
                <div className='col-10'>
                <h3>Thông tin cá nhân</h3>
                <p>Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.</p>
                </div>
                   
                </div>
            </div>
        </div>
    </> 
    )
} 