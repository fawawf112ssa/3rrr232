import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { authUser, setCurrentUser, setToken, setVerifyUserId } from 'store/reducers/userSlice';

export enum SigninEnum {
  SUCCESS = 'success',
  GA = 'need_2fa',
}

interface SigninResponse {
  expires: string;
  result: SigninEnum;
  token?: string;
  user_id?: number;
}

interface VerifyGAResponse {
  result: 'ok' | 'fail';
  token: {
    expires: string;
    token: string;
  };
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (build) => ({
    registration: build.mutation<
      { token: string; expires: string; result: string },
      { username: string; nickname: string; password: string }
    >({
      query: (body) => ({
        method: 'POST',
        url: 'reg',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem('token', data.token);
          dispatch(setToken(data.token));
          dispatch(authUser(true));
        } catch {
          throw new Error();
        }
      },
    }),
    signIn: build.mutation<SigninResponse, { username: string; password: string }>({
      query: (body) => ({
        method: 'POST',
        url: 'login',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          if (data?.token) {
            localStorage.setItem('token', data.token);
            dispatch(setToken(data.token));
            dispatch(authUser(true));
          }
          if (data?.user_id !== undefined) {
            dispatch(setVerifyUserId(data.user_id));
          }
        } catch {
          throw new Error();
        }
      },
    }),
    verifyGA: build.mutation<VerifyGAResponse, { code: string; user_id: number }>({
      query: (body) => ({
        method: 'POST',
        url: 'verify_2fa',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      onQueryStarted: async ({ user_id }, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          if (data.result === 'ok') {
            localStorage.setItem('token', data.token.token);
            dispatch(setToken(data.token.token));
            dispatch(authUser(true));
            dispatch(setCurrentUser(user_id));
          }
        } catch {
          throw new Error();
        }
      },
    }),
    checkToken: build.mutation<{ user_id: number; expires: string }, { token: string }>({
      query: (body) => ({
        method: 'POST',
        url: 'get_token',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      onQueryStarted: async ({ token }, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCurrentUser(data.user_id));
          dispatch(authUser(true));
          dispatch(setToken(token));
        } catch {
          throw new Error();
        }
      },
    }),
  }),
});
