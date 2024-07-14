import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MessageFromChat } from 'services/api/chat';
import { Balance, CurrencyEnum } from 'store/reducers/userSlice';
import { CriptoEnum } from './currencySlice';
import { cryptoArr } from 'constants/crypto';
import { Position } from 'services/api/room';

export enum RoundStatus {
  NEW = 'new',
  RUN = 'run',
  DONE = 'done',
  CANCEL = 'cancel',
}

export enum StatusesBet {
  NEW = 'new',
  WIN = 'win',
  LOST = 'lost',
  CANCEL = 'cancel',
}

export enum Gem {
  BLUE = 1,
  ORANGE,
  PURPLE,
}

export const gemData = {
  [Gem.BLUE]: 'blue',
  [Gem.ORANGE]: 'orange',
  [Gem.PURPLE]: 'purple',
};

export interface BetsInfo {
  user_id: number;
  nickname: string;
  logo: string;
  coin: CurrencyEnum;
  value: number;
  status: StatusesBet;
  gem: number;
  coef: number;
}

interface Bets {
  bets: BetsInfo[];
  sum: { [key: string]: number };
}

export interface LongRound {
  round_id: number;
  round_hash: string;
  status: RoundStatus;
  coef: string;
  timing: string;
  next_round: string;
}

interface LongInfo {
  round_info: LongRound | null;
  round_history: string[];
  bets: Bets;
  my_bet: { coin: CurrencyEnum; value: number; status: StatusesBet; coef: number } | null;
}

interface RouletteRound {
  round_id: number;
  round_hash: string;
  status: RoundStatus;
  gem: number;
  timing: string;
  next_round: string;
}

interface RouletteInfo {
  round_info: RouletteRound | null;
  round_history: {
    last100: Gem[];
    last100_sum: { [key in Gem]: number };
    last10: Gem[];
  };
  bets: {
    bets: BetsInfo[];
    bets_gems: { [key in Gem]: number };
    sum: { [key: string]: number } | null;
  };
  my_bet: { coin: CurrencyEnum; gem: Gem; status: StatusesBet; value: number } | null;
}

export interface Room {
  id: number;
  date: string;
  status: 'new' | 'run' | 'complete' | 'done' | 'cancel';
  status_due_sec: number | null;
  user1_coin: string;
  user1_logo: string;
  user1_name: string;
  user1_id: number;
  user1_side: Position;
  user2_coin: string | null;
  user2_logo: string | null;
  user2_name: string | null;
  user2_id: number | null;
  user2_side: Position | null;
  winner_id: number | null;
  value_usd: number;
}

export interface GameInfo {
  chat: { [key: string]: MessageFromChat } | null;
  long: LongInfo | null;
  roulette: RouletteInfo | null;
  rooms: Room[];
  my_balance: Balance | null;
  users: number | null;
  date: string | null;
  ping_stamp?: string;
  result?: string;
}

interface InitialState {
  statusesLongGame: RoundStatus;
  isLongGameUser: boolean;
  gameInfo: GameInfo;
  rouletteBet: string;
  criptoActive: CriptoEnum;
  ping: number;
  gameId: number;
}

const initialState: InitialState = {
  statusesLongGame: RoundStatus.DONE,
  isLongGameUser: false,
  gameInfo: {
    chat: null,
    long: null,
    roulette: null,
    rooms: [],
    my_balance: null,
    users: null,
    date: null,
  },
  rouletteBet: '',
  criptoActive: cryptoArr[0],
  ping: 65,
  gameId: 1,
};

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setIsLongGame: (state, action: PayloadAction<boolean>) => {
      state.isLongGameUser = action.payload;
    },
    setStatusesLongGame: (state, action: PayloadAction<RoundStatus>) => {
      state.statusesLongGame = action.payload;
    },
    setGameInfo: (state, action: PayloadAction<GameInfo>) => {
      const { chat, long, my_balance, roulette, users, rooms } = action.payload;

      if (chat !== null && state.gameInfo.chat !== null) {
        const currentMessagesChat = Object.keys(state.gameInfo.chat);
        const currentLastChatId = Number(currentMessagesChat[currentMessagesChat.length - 1]);
        const newFirstChatId = Number(Object.keys(chat)[0]);

        if (newFirstChatId > currentLastChatId) {
          state.gameInfo.chat = chat;
        }
      } else if (chat !== null && state.gameInfo.chat === null) {
        state.gameInfo.chat = chat;
      }

      state.gameInfo.long = long;
      state.gameInfo.my_balance = my_balance;
      state.gameInfo.roulette = roulette;
      state.gameInfo.users = users;
      state.gameInfo.rooms = rooms ? rooms : [];
    },
    setRouletteBet: (state, action: PayloadAction<string>) => {
      state.rouletteBet = action.payload;
    },
    setCryptoActive: (state, action: PayloadAction<CriptoEnum>) => {
      state.criptoActive = action.payload;
    },
    setPing: (state, action: PayloadAction<number>) => {
      state.ping = action.payload;
    },
    setGameId: (state, action: PayloadAction<number>) => {
      state.gameId = action.payload;
    },
    resetGameState() {
      return initialState;
    },
  },
});

export const {
  setIsLongGame,
  setStatusesLongGame,
  resetGameState,
  setGameInfo,
  setRouletteBet,
  setCryptoActive,
  setPing,
  setGameId,
} = gameSlice.actions;

export default gameSlice.reducer;
