import React from 'react';
import { IoMdAddCircle  } from "react-icons/io";
import { useRef } from 'react';
import './LoginSection.css';

const ImageSection = () => {
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-container">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        className='hidden-input'
      />
      <img src="/src/assets/images/samplepic.png" className="uploaded-image" ref={uploadedImage} />
      <IoMdAddCircle size={20} onClick={() => imageUploader.current.click()} className='upload-icon'/>
    </div>
  );
};

export default ImageSection;