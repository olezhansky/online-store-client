/* eslint-disable no-unused-vars */
import axios from 'axios';

const uploadImg = (imageSelected) => {
  console.log('imageSelected===', imageSelected);
  const formData = new FormData();
  formData.append('file', imageSelected);
  formData.append('upload_preset', 'photo-store');
  console.log('UPLOAD click');
  console.log('FORM', formData);
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
    }
  };
  return axios
    .post(
      'https://api.cloudinary.com/v1_1/finalprojectfe242021/image/upload/', formData
    );
};

export default uploadImg;
