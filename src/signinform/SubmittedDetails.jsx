import React, { useContext } from 'react';
import { Context } from './UserProvider';
import  moment  from 'moment';
import './SubmittedDetails.css';
const SubmittedDetails = () => {
  const { userDetails, uploadImageUrl } = useContext(Context);
  if (!userDetails) return null;
  if (!uploadImageUrl) return null;

  return (
    <div className="details-container">
      <p className='title'>User Details</p>
      <div className='profile-container'>
      <img src={uploadImageUrl} className="image-preview" />
      <p>Profile Picture</p>
      <p>First Name: {userDetails.firstname}</p>
      <p>Last Name: {userDetails.lastname}</p>
      <p>Email: {userDetails.email}</p>
      <p>Phone: {userDetails.phone}</p>
      <p>State :{userDetails.state}</p>
      <p>DOB : {moment(userDetails.date).format('DD/MM/YYYY')}</p>
      <p>Courses Interested: {userDetails.courses.join(', ')}</p>
    </div>
    </div>
  );
};

export default SubmittedDetails;
