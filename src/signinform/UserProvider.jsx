/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';
const Context = createContext(null);

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [uploadImageUrl, setUploadImageUrl] = useState(null);

  const updateUserDetails = (details) => {
    setUserDetails(details);
  };

  const updateUploadedImageUrl = (url) => {
    setUploadImageUrl(url);
  };
  return (
    <Context.Provider
      value={{ userDetails, updateUserDetails, updateUploadedImageUrl, uploadImageUrl }}>
      {children}
    </Context.Provider>
  );
};

export { UserProvider, Context };
