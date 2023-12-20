import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const CountryRegionSelector = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

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
