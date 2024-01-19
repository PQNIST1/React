import { useState } from "react";

const HotelDetails = ({onChange}) => {
  const [detail, setDetail] = useState('');

  const handleAddress = (event) => {
    setDetail(event.target.value);
    onChange('detail',event.target.value);
  };

  return (
    <div>
      <div className='hotel-address'>
        <textarea
        id="myTextarea"
        value={detail}
        onChange={handleAddress}
        placeholder='Nhập thông tin thêm cho chổ nghỉ của bạn'
        rows={4} // You can set the number of rows as needed
        cols={50} // You can set the number of columns as needed
      />
      </div>
    </div>
  );
};

export default HotelDetails;
