/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import InputField from '../common/components/InputField';
import ImageSection from './Imagesection';
import DropDown from '../common/components/DropDown';
import DatePickerField from '../common/components/DatePickerField';
import './LoginSection.css';

const LoginSection = () => {
  const {
    handleSubmit,
    control,trigger,
    formState: { errors },
    getValues
  } = useForm();
  const courses = [
    { id: 0, name: 'CSE' },
    { id: 1, name: 'EE' },
    { id: 2, name: 'ME' },
    { id: 3, name: 'ECE' }
  ];
  const [checked, setChecked] = useState(courses.map((item) => ({ ...item, checked: false })));
  const values = getValues();
  console.log(values, 'values');

  const array = ['Punjab', 'Chandigarh', 'Haryana', 'J&K', 'Other'];

  const onClick = (data) => {
    console.log(data);
  };
  const handleCheckBoxChange = (id) => {
    setChecked(
      checked.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };
  return (
    <div className="login-container">
      <form className="form-container">
        <p className="title">Application Form</p>
        <div className="profile-container">
          <ImageSection />
        </div>
        <div className="login-info">
          <div className="sub-container">
            <InputField
              type="text"
              label="First Name"
              name="firstname"
              control={control}
              errors={errors}
              trigger={trigger}
            />
            <InputField
              type="text"
              label="Last Name"
              name="lastname"
              control={control}
              errors={errors}
              trigger={trigger}
            />
          </div>
        </div>
        <div>
          <InputField
            type="email"
            label="Email"
            name="email"
            control={control}
            errors={errors}
            trigger={trigger}
          />
          <InputField
            type="number"
            label="Phone"
            name="phone"
            control={control}
            errors={errors}
            trigger={trigger}
          />
        </div>

        <div className="date-region-container">
          <div className="contact-info">
            <label className="dob-container">Date Of Birth</label>
            <DatePickerField name={'date'} control={control} />
          </div>
          <DropDown label="Select State" array={array} control={control} name={'dropdown'} />
        </div>
        <div className="course-container">
          <p>Which Course are You Interested in?</p>
          <div className="checkbox">
            <div className="checkbox-sub-container">
              {checked.map((item) => (
                <div key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckBoxChange(item.id)}
                  />
                  <label>{item.name}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="button-container">
          <button type="submit" onClick={handleSubmit(onClick)} className="login-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSection;
