import React, { useState, useEffect } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const CountryRegionSelector = ({value}) => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const parts = value.split(', ');

// Lấy country và region từ mảng
  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };
  useEffect(() => {
    // Kiểm tra xem user có giá trị không và userName chưa được thiết lập
    if (value) {
      setCountry(parts[0]);
      setRegion(parts[1]);
    }
  }, [value]);
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

export default CountryRegionSelector;
