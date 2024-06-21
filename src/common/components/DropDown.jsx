import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

const DropDown = (props) => {
  const { label, name, control, trigger } = props;
  const { field, fieldState } = useController({ name, control });

  return (
    <div className="dropdown">
      <label>{label}</label>
      <select
        name={name}
        value={field.value || ''}
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

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  trigger: PropTypes.func
};

export default DropDown;
