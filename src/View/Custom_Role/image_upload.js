import React, { useState } from 'react';

const MultiImageUploader = ({ onImagesUpload }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      // Convert the FileList object to an array
      const newImages = Array.from(files);

      // Update state with the selected images
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);

      // If a callback function is provided, call it with the selected images
      if (onImagesUpload) {
        onImagesUpload([...newImages]);
      }
    }
  };

  const removeImage = (index) => {
    // Remove the selected image at the specified index
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);

    // If a callback function is provided, call it with the updated images
    if (onImagesUpload) {
      onImagesUpload(updatedImages);
    }
  };

  return (
    <div className="multi-image-uploader">
      <h6>Tải ảnh lên:</h6>
      <input type="file" accept="image/*" multiple onChange={handleFileChange} />
      {selectedImages.length > 0 && (
        <div>
          <p>Đã chọn {selectedImages.length} ảnh:</p>
          <div className="selected-images">
            {selectedImages.map((image, index) => (
              <div key={index} className="selected-image">
                <img src={URL.createObjectURL(image)} alt={`Selected ${index + 1}`} />
                <button  onClick={() => removeImage(index)}>Xóa</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiImageUploader;
