import './card.css'
let Content = ({ icon, title, detail }) => {
    return (
        <>
            <div className='content'>
                {icon}
                <p>{title}</p>
                <h5>{detail}</h5>
            </div>
        </>
    )
}

export default function Card() {
    return (
        <>
            <div className="hotel-card">
                <picture className='picture'>
                    <img src='https://cf.bstatic.com/xdata/images/hotel/square600/376412232.webp?k=b3b32994e4d2b67580cc3b4683dcb751a258abfe82c9d68e4e6ffb53f3c5ac44&o='></img>
                </picture>
                <div className='card-content'>
                    <h4>Khách sạn Hương Bình</h4>
                    <Content icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>} title='Tổng giá:' detail='VND 200.000' />
                    <Content icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    } title='T5, 23 tháng 3 2023 - T6, 24 tháng 3 2023, ' detail='1 đêm' />
                    <Content icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path></svg>} title='Phòng tiêu chuẩn giường đôi' />
                </div>
                <div className='check'>
                <div className='status'>
                    <h4>Trạng thái</h4>
                    <div className='wait'>
                    <i class="fas fa-spinner"></i>
                    <p>Đang chờ xác nhận....</p>
                    </div>
                </div>
                <button className='btn btn-primary' type='button'>Xem hoặc cập nhật chi tiết</button>
                </div>
            </div>
        </>
    )
}
