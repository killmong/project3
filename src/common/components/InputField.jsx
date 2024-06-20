/* eslint-disable react/prop-types */

import React from 'react';
import { useController } from 'react-hook-form';

const InputField = (props) => {
  const { label, type, name, control, trigger} = props;
  const { field, fieldState } = useController({ name, control });
  return (
    <div className="contact-info">
      <label>{label}</label>
      <input
        className="input-field"
        autoComplete="off"
        type={`${type}`}
        maxLength={type==='number' ? 10 :null}
        placeholder={`Enter ${label}`}
        onChange={(event) => {
          field.onChange(event);
          trigger && trigger();
        }}
      
      />
      {fieldState?.error?.message && (
        <p className="error-message">
          {fieldState?.error?.message}</p>)}
  </div>
)};
export default InputField;
