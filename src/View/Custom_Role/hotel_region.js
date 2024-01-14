import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const HotelRegionSelector = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [address, setAddress] = useState('');

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  return (
    <div>
      <h6>Vùng/quốc gia</h6>
      <CountryDropdown
        value={country}
        onChange={(val) => selectCountry(val)}
        defaultOptionLabel='Chọn quốc gia của bạn'
        showDefaultOption='Vietnam'
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => selectRegion(val)}
        defaultOptionLabel='Chọn vùng của bạn'
      />
      <div className='hotel-address'>
        <input
          type='text'
          value={address}
          onChange={handleAddress}
          placeholder='Nhập địa chỉ chổ nghỉ của bạn'
        />
      </div>
    </div>
  );
};

export default HotelRegionSelector;
