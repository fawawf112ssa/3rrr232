import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store';

interface CreateResponse {
  result: 'ok' | 'fail';
  room_id: number;
  coin: string;
  bet: number;
  details: string;
}

interface JoinResponse {
  result: 'ok' | 'fail';
  coin: string;
  bet: number;
  details: string;
}

interface CancelResponse {
  result: 'ok' | 'fail';
  details: string;
}

export interface BXEHistory {
  id: number;
  date: string;
  user1: string;
  user2: string;
  coin: string;
  value: number;
  result: string;
  status: string;
}

export enum Position {
  BTC = 1,
  ETH = 2,
}

export const roomApi = createApi({
  reducerPath: 'roomApi',
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
    createRoom: build.mutation<CreateResponse, { coin: string; bet: number; gem: Position }>({
      query: (body) => ({
        method: 'POST',
        url: 'room/create',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    joinRoom: build.mutation<JoinResponse, { room_id: number; coin: string }>({
      query: (body) => ({
        method: 'POST',
        url: 'room/join',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    removeRoom: build.mutation<CancelResponse, { room_id: number }>({
      query: (body) => ({
        method: 'POST',
        url: 'room/cancel',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    historyRoom: build.query<{ result: BXEHistory[] }, null>({
      query: () => ({
        url: `room/history`,
      }),
    }),
  }),
});
