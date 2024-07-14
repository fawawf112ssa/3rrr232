import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store';

export enum CrashStatuses {
  FAIL = 'fail',
  NEW = 'new',
  WIN = 'win',
  LOST = 'lost',
  OK = 'ok',
}

export interface CrashBetRequest {
  coin: string;
  bet: number;
  coef?: number;
}

export interface UserLongHistory {
  round_id: number;
  date: string;
  coin: number;
  bet: number;
  coef: number;
  status: string;
  profit: string;
}

export const crashApi = createApi({
  reducerPath: 'crashApi',
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
    crashBet: build.mutation<{ [key: string]: string | number }, CrashBetRequest>({
      query: (body) => ({
        method: 'POST',
        url: 'bet/make/1',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    userHistoryLong: build.query<
      {
        result: Array<UserLongHistory>;
      },
      null
    >({
      query: () => ({
        url: `crash/user_bets_history`,
      }),
    }),
    crashStop: build.query<{ [key: string]: string | number }, null>({
      query: () => ({
        url: 'crash/bet/take',
      }),
    }),
  }),
});
