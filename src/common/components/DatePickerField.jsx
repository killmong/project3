/* eslint-disable react/prop-types */
import React from 'react';
import DatePicker from 'react-datepicker';
import { useController } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = (props) => {
  const { name, control } = props;
  const {
    field: { onChange, value } 
  } = useController({
    name,
    control
  });

  return (
    <div className="date-picker-field">
      <DatePicker className='input-field'
        dateFormat="MM-dd-yyyy"
        selected={value}
        onChange={(newDate) => {
          onChange(newDate);
        }}
      />
    </div>
  );
};

export default DatePickerField;
