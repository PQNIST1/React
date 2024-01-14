import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';

const HotelPhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <div className='phone'>
      <h6>Điện thoại (ưu tiên số ĐTDĐ)</h6>
      <PhoneInput
        value={phoneNumber}
        onChange={setPhoneNumber}
        defaultCountry="VN"
      />
    </div>
  );
};

export default HotelPhoneInput;
