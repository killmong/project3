/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

const Region = (props) => {
  const { label, name, control, trigger } = props;
  const { field, fieldState } = useController({ name, control });
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select
        name={name}
        onChange={(event) => {
          field.onChange(event);
          trigger && trigger();
        }}>
        {props.array.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
        {fieldState?.error?.message && (
          <p className="error-message">{fieldState?.error?.message}</p>
        )}
      </select>
    </div>
  );
};

Region.propTypes = {
  label: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired
};

export default Region;
