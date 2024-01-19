import React, { useState,useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';

const PhoneNumberInput = ({value}) => {
  console.log(value)
  const [phoneNumber, setPhoneNumber] = useState('');
    useEffect(() => {
      // Kiểm tra xem user có giá trị không và userName chưa được thiết lập
      if (value) {
        setPhoneNumber(value);
      }
    }, [value]);
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

export default PhoneNumberInput;
