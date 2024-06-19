import React from 'react';
import LoginSection from './LoginSection';
import SubmittedDetails from './SubmittedDetails';

const LoginForm = () => {
  return (
    <div className="container">
      <LoginSection />
      <SubmittedDetails />
    </div>
  );
};

export default LoginForm;
