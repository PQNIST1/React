import React, { useState, useEffect } from 'react';

const MultiImageUploader = ({ onImagesUpload, onChange }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    // Hàm chuyển đổi URL
    const updateImagesWithUrls = async () => {
      const urls = await Promise.all(selectedImages.map((image) => readFileAsDataURL(image)));
      // Now 'urls' contains the URLs for each selected image
      onChange('image',urls);
    };

    // Gọi hàm chuyển đổi URL sau khi selectedImages thay đổi
    updateImagesWithUrls();
  }, [selectedImages]);

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

  // Function to read the image file and convert it to URL
  const readFileAsDataURL = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(file);
    });
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
                <button onClick={() => removeImage(index)}>Xóa</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiImageUploader;
