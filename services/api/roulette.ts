import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store';
import { Gem } from 'store/reducers/gameSlice';

export interface RouletteBetRequest {
  coin: string;
  bet: number;
  gem: Gem;
}

export interface UserRouletteHistory {
  round_id: number;
  date: string;
  coin: string;
  bet: number;
  coef: number;
  status: string;
  profit: string;
  gem: string;
}

export const rouletteApi = createApi({
  reducerPath: 'rouletteApi',
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
    rouletteBet: build.mutation<{ [key: string]: string | number }, RouletteBetRequest>({
      query: (body) => ({
        method: 'POST',
        url: 'bet/make/2',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    userHistoryRoulette: build.query<
      {
        result: Array<UserRouletteHistory>;
      },
      null
    >({
      query: () => ({
        url: `roulette/user_bets_history`,
      }),
    }),
  }),
});
