import { authApi } from './api/auth';
import { chatApi } from './api/chat';
import { crashApi } from './api/crash';
import { gameApi } from './api/game';
import { roomApi } from './api/room';
import { rouletteApi } from './api/roulette';
import { userApi } from './api/user';
import { walletApi } from './api/wallet';

export const {
  useLazyGetUserQuery,
  useUpdatePasswordMutation,
  useGetRefCodeUserQuery,
  useActiveReferalMutation,
  useLazyCreate2faQuery,
  useGetRefStatsQuery,
  useLazyCheck2faQuery,
  useEnable2faMutation,
} = userApi;

export const { useGetRouletteQuery, useGetGameQuery, useGetRoundQuery, useCreateGameMutation } =
  gameApi;

export const { useCrashBetMutation, useUserHistoryLongQuery, useLazyCrashStopQuery } = crashApi;

export const { useRouletteBetMutation, useUserHistoryRouletteQuery } = rouletteApi;

export const {
  useSignInMutation,
  useCheckTokenMutation,
  useRegistrationMutation,
  useVerifyGAMutation,
} = authApi;

export const { useAddMessageMutation } = chatApi;

export const {
  useGetWalletQuery,
  useLazyGetWalletQuery,
  useSendWalletMutation,
  useUserHistoryWalletQuery,
} = walletApi;

export const {
  useCreateRoomMutation,
  useJoinRoomMutation,
  useRemoveRoomMutation,
  useHistoryRoomQuery,
} = roomApi;
