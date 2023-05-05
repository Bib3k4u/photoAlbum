import React, { useState } from 'react';

function Create() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    setSelectedFiles(event.target.files);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('images', selectedFiles[i]);
    }

    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // console.log('Images uploaded successfully:', data);
        alert("Image upload succesfully");
      })
      .catch(error => {
        // console.error('Error uploading images:', error);
        alert("unable to upload images");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="images" multiple onChange={handleFileInputChange} />
      <button type="submit">Upload</button>
    </form>
  );
}
export default Create;