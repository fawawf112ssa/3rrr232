import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { List } from 'modules/components/List/List';
import {
  Wrapper,
  TransferBlock,
  criptoListCss,
  InGameUser,
  Input,
  InputWrap,
  Label,
  Pointer,
  Roulette,
  RouletteWrap,
  HistoryGame,
  InfoBlock,
  LastGame,
  Time,
  Timer,
  TimerText,
  LastGameTitle,
  LastGameWrap,
  LastGameItem,
} from './Game.styled';
import { cryptoArr } from 'constants/crypto';
import { CryptoBtn } from 'modules/components/CryptoBtn/CryptoBtn';
import { useResize } from 'hooks/useResize';
import { CriptoEnum } from 'store/reducers/currencySlice';
import { useAppDispatch, useAppSelector } from 'store';
import { gameSelector } from 'store/selectors';
import {
  Gem,
  RoundStatus,
  gemData,
  setCryptoActive,
  setRouletteBet,
} from 'store/reducers/gameSlice';
import { converterForTimer } from 'utils/converter';
import { RouletteList } from '../List/List';

export const Game = () => {
  const dispatch = useAppDispatch();
  const {
    gameInfo: { roulette },
    rouletteBet,
    criptoActive,
  } = useAppSelector(gameSelector);
  const { t } = useTranslation();
  const [width] = useResize();

  const renderItem = (item: CriptoEnum) => (
    <CryptoBtn
      criptoActive={criptoActive}
      cryptoName={item}
      handleActiveCripto={handleActiveCripto}
    />
  );

  const handleActiveCripto = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id as CriptoEnum;

    dispatch(setCryptoActive(id));
  };

  return (
    <Wrapper>
      <div>
        <Roulette>
          <RouletteWrap>
            <Pointer />
            <RouletteList />
          </RouletteWrap>
        </Roulette>
        <InfoBlock>
          <LastGame>
            <LastGameTitle>{t('last')} 100</LastGameTitle>
            <LastGameWrap>
              {roulette &&
                Object.entries(roulette.round_history.last100_sum).map(([type, count]) => (
                  <LastGameItem className={gemData[type as unknown as Gem]} key={type}>
                    {count}
                  </LastGameItem>
                ))}
            </LastGameWrap>
          </LastGame>
          {roulette && roulette.round_info && (
            <Timer>
              {roulette.round_info.status === RoundStatus.NEW &&
              Number(roulette.round_info.next_round) > 0 ? (
                <>
                  <Time>
                    {converterForTimer(String(roulette.round_info.next_round), true).map(
                      (item, i) => (
                        <p style={{ color: '#f7d085' }} key={i}>
                          {i === 0 && Number(item) < 10 ? `0${item}` : item}
                        </p>
                      )
                    )}
                  </Time>
                  <TimerText>{t('start')}</TimerText>
                </>
              ) : (
                ''
              )}
            </Timer>
          )}
          <HistoryGame>
            {roulette &&
              roulette.round_history.last10.map((item, i) => (
                <div className={gemData[item as unknown as Gem]} key={i} />
              ))}
          </HistoryGame>
        </InfoBlock>
      </div>
      <TransferBlock>
        {width >= 767 && <List renderItem={renderItem} data={cryptoArr} styles={criptoListCss} />}
        {roulette && roulette.bets && roulette.bets.sum && (
          <InGameUser>
            {roulette.bets.sum['total_bets']} {t('participates')}, {roulette.bets.sum['total_usd']}$
          </InGameUser>
        )}
        {width >= 767 && (
          <InputWrap>
            <Label>
              {t('bet')}:
              <Input
                placeholder={t('amount')}
                type="number"
                min={0.05}
                step={0.001}
                value={rouletteBet}
                onChange={(e) => dispatch(setRouletteBet(e.target.value))}
              />
            </Label>
          </InputWrap>
        )}
      </TransferBlock>
    </Wrapper>
  );
};
