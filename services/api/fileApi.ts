import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'store';

const uploadFiles = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const uploadIconFile = createAsyncThunk(
  'uploadIconFile',
  async (data: FormData, { rejectWithValue, getState }) => {
    try {
      console.log(data);

      const { token } = (getState() as RootState).userReducer;
      if (token) {
        const response = await uploadFiles.post('/user_logo/upload', data, {
          headers: {
            'content-type': 'multipart/form-data',
            token: token,
          },
        });
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
