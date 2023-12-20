import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";

const MyDatePicker = () => {
  const [value, setValue] = useState([
    new DateObject().setDay(15),
    new DateObject().add(1, "month").setDay(15),
  ]);

  return (
    <DatePicker
      value={value}
      onChange={setValue}
      range
      numberOfMonths={2}
      plugins={[<Footer position="bottom" />]}
    />
  );
};

export default MyDatePicker;
