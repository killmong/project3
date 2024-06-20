import React, { useContext } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { useRef } from 'react';
import './LoginSection.css';
import { Context } from './UserProvider';

const ImageSection = () => {
  const { updateUploadedImageUrl } = useContext(Context);
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    console.log(e.target.files)
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
       // console.log(e.target.result)
        updateUploadedImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-container overlay">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        className="hidden-input"
      />
      <img src="/src/assets/images/Profile.png" className="uploaded-image" ref={uploadedImage} />
      <IoMdAddCircleOutline
        size={22}
        onClick={() => imageUploader.current.click()}
        className="upload-icon"
      />
    </div>
  );
};

export default ImageSection;
