import React from 'react';
import LoginSection from './LoginSection.jsx';
import SubmittedDetails from './SubmittedDetails.jsx';

const LoginForm = () => {
  return (
    <div className="container">
        <LoginSection />
        <SubmittedDetails />
    </div>
  );
};

export default LoginForm;
