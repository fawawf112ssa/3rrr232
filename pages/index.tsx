import { lazy } from 'react';

// main pages
export const LongPage = lazy(() => import('./Long/Long'));
export const RoulettePage = lazy(() => import('./Roulette/Roulette'));
export const FuturesPage = lazy(() => import('./Futures/Futures'));
export const BtcEthPage = lazy(() => import('./BtnEth/BtcEth'));
export const SettingPage = lazy(() => import('./Setting/Setting'));
export const MessagePage = lazy(() => import('./Message/Message'));

// admin pages
export const LongAdminPanel = lazy(() => import('./Admin/Long/Long'));
export const RouletteAdminPanel = lazy(() => import('./Admin/Roulette/Roulette'));
export const FuturesAdminPanel = lazy(() => import('./Admin/Futures/Futures'));
export const CreateGamesAdminPanel = lazy(() => import('./Admin/CreateGames/CreateGames'));
export const UsersAdminPanel = lazy(() => import('./Admin/Users/Users'));

// info pages
export const TermsOfService = lazy(() => import('./Info/TermsOfService/TermsOfService'));
export const GamingPolicy = lazy(() => import('./Info/GamingPolicy/GamingPolicy'));
export const FairPlay = lazy(() => import('./Info/FairPlay/FairPlay'));
export const AmlPolicy = lazy(() => import('./Info/AmlPolicy/AmlPolicy'));
export const Contact = lazy(() => import('./Info/Contact/Contact'));
