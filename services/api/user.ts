import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store';
import { setUserInfo } from 'store/reducers/userSlice';

interface GoogleAuth {
  result: 'created' | 'exist';
  details: {
    '2fa_code': string;
    'prov-url': string;
    'qrcode-url': string;
  };
}

export interface User {
  reg_date: string;
  username: string;
  nick: string;
  mute: number;
  ban: number;
  ip: string | null;
  logo: string | null;
}

interface UpdatePass {
  passwd: string;
}

export const userApi = createApi({
  reducerPath: 'userApi',
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
    getUser: build.query<User, null>({
      query: () => ({
        url: `user`,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUserInfo(data));
        } catch {
          throw new Error();
        }
      },
    }),
    getRefCodeUser: build.query<{ code: string }, null>({
      query: () => ({
        url: `user/get_ref_code`,
      }),
    }),
    getRefStats: build.query<{ result: string[]; total: number; level: string }, null>({
      query: () => ({
        url: `user/get_ref_stats`,
      }),
    }),
    updatePassword: build.mutation<null, UpdatePass>({
      query: (body) => ({
        method: 'POST',
        url: 'user/update_passwd',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    activeReferal: build.mutation<{ details: string; result: string }, { code: string }>({
      query: (body) => ({
        method: 'POST',
        url: 'user/activate_ref_code',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    create2fa: build.query<GoogleAuth, null>({
      query: () => ({
        url: `create_2fa`,
      }),
    }),
    check2fa: build.query<{ result: 'ok' | 'fail' }, null>({
      query: () => ({
        url: `check_2fa`,
      }),
    }),
    enable2fa: build.mutation<{ result: string }, { code: string; user_id: number }>({
      query: (body) => ({
        method: 'POST',
        url: 'enable_2fa',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});
