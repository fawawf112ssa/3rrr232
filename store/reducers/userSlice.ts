import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'services/api/user';

export enum CurrencyEnum {
  BTC = 'btc',
  XML = 'xmr',
  LTC = 'ltc',
  USDT = 'usdt',
  USD = 'usd',
}

interface CurrencyParam {
  val: number;
  val_usd: number | null;
  ingame: number;
  total: number;
  total_usd: number | null;
}

export type Balance = {
  [key in CurrencyEnum]: CurrencyParam;
};

interface InitialState {
  token: string | null;
  isAuth: boolean;
  isAdmin: boolean;
  user: User | null;
  currentUser: number | null;
  verifyUserId: number | null;
}

const initialState: InitialState = {
  token: null,
  isAuth: false,
  isAdmin: true,
  user: null,
  currentUser: null,
  verifyUserId: null,
};

export const settingSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    authUser: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<number | null>) => {
      state.currentUser = action.payload;
    },
    setVerifyUserId: (state, action: PayloadAction<number | null>) => {
      state.verifyUserId = action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { authUser, setToken, logout, setCurrentUser, setUserInfo, setVerifyUserId } =
  settingSlice.actions;

export default settingSlice.reducer;
