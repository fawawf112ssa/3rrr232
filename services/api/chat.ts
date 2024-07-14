import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store';

export interface MessageFromChat {
  nickname: string;
  text: string;
  timestamp: string;
  logo: string;
}

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userReducer.token;
      if (token) {
        headers.set('token', `${token}`);
        return headers;
      }
    },
  }),
  endpoints: (build) => ({
    addMessage: build.mutation<null, { text: string }>({
      query: (body) => ({
        method: 'POST',
        url: `chat/message/add`,
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});
