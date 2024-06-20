/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState} from 'react';
import DatePicker from 'react-datepicker';
import { useController } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = (props) => {
  const { name, control, trigger } = props;
  const [initialValue] = useState(new Date()); // Set initial value to current date

  const {
    field: { onChange, value },
    fieldState
  } = useController({
    name,
    control,
    defaultValue: initialValue // Set default value to initial value
  });

  return (
    <div className="date-picker-field">
      <DatePicker
        className="input-field"
        dateFormat="MM-dd-yyyy"
        selected={value}
        onChange={(newDate) => {
          onChange(newDate);
          trigger && trigger();
        }}
      />
      {fieldState?.error?.message && <p className="error-message">{fieldState?.error?.message}</p>}
    </div>
  );
};

export default DatePickerField;