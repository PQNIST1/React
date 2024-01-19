import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const HotelRegionSelector = ({onChange}) => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const selectCountry = (val) => {
    setCountry(val);
    onChange('address', { province: region, s_address: val});
  };

  const selectRegion = (val) => {
    setRegion(val);
    onChange('address', {province: val, s_address: country });
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
    </div>
  );
};

export default HotelRegionSelector;
