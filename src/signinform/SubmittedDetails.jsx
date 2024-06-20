import React, { useContext } from 'react';
import { Context } from './UserProvider';
import './SubmittedDetails.css';
const SubmittedDetails = () => {
  const { userDetails, uploadImageUrl,userDate } = useContext(Context);
  if (!userDetails) return null;
  if (!uploadImageUrl) return null;
  if(!userDate) return null;
  return (
    <div className='details-container'>
      <h2>User Details</h2>
      <img src={uploadImageUrl} className="image-preview" />
      <p>Profile Picture</p>
      <p>First Name: {userDetails.firstname}</p>
      <p>Last Name: {userDetails.lastname}</p>
      <p>Email: {userDetails.email}</p>
      <p>Phone: {userDetails.phone}</p>
      <p>DOB: {userDetails.date}</p>
      <p>Courses Interested: {userDetails.courses.join(', ')}</p>
    </div>
  );
};

export default SubmittedDetails;
