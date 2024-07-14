import { useEffect, useRef, useState } from 'react';
import useSound from 'use-sound';

import { RouletteItem } from './../Item/Item';
import { Roulette, DiamondAttributes } from './../roulette.classes';
import { Gem, RoundStatus } from 'store/reducers/gameSlice';
import { useAppSelector } from 'store';
import { gameSelector, settingSelector } from 'store/selectors';
import { RouletteItems, Wrapper } from './List.styled';
import { diamonds } from 'data/roulette';
import soundClick from './start.mp3';

export const RouletteList = () => {
  const [rouletteDiamonds, setRouletteDiamonds] = useState<DiamondAttributes[]>(diamonds);
  const [diamondPrizeId, setDiamondPrizeId] = useState<number>(-1);
  const [isReplay, setIsReplay] = useState<boolean>(false);
  const [isSpin, setIsSpin] = useState<boolean>(false);
  const [isSpinEnd, setIsSpinEnd] = useState<boolean>(false);
  const {
    gameInfo: { roulette },
  } = useAppSelector(gameSelector);
  const { isActiveSound } = useAppSelector(settingSelector);
  const [play] = useSound(soundClick, { volume: isActiveSound ? 1 : 0 });

  const rouletteContainerRef = useRef<HTMLDivElement>(null);
  const diamondsRef = useRef<HTMLDivElement>(null);

  function transitionEndHandler() {
    setIsSpin(false);
    setIsSpinEnd(true);
  }

  function prepare() {
    diamondsRef.current!.style.transition = 'none';
    diamondsRef.current!.style.left = '0px';
  }

  function load(duration: number, diamond: { gem: Gem }) {
    const roulette = new Roulette({
      diamond,
      diamonds,
      rouletteContainerRef,
      diamondsRef,
      diamondsCount: 250,
      transitionDuration: duration,
      itemWidth: 80,
    });

    roulette.setDiamonds();
    setRouletteDiamonds(roulette.diamonds);

    return roulette;
  }

  useEffect(() => {
    if (roulette === null || roulette.round_info === null) {
      return;
    }

    if (roulette.round_info.status === RoundStatus.NEW) {
      play();
    }

    if (roulette.round_info.status === RoundStatus.RUN && roulette.round_info.gem !== null) {
      const duration = 9 - Number(roulette.round_info.timing);
      const winner = { gem: roulette.round_info.gem };

      if (isReplay) {
        prepare();
      }
      setIsSpin(true);

      const loadRoulette = load(duration, winner);

      const timer = setTimeout(() => {
        setIsSpin(true);
        setDiamondPrizeId(loadRoulette.spin());
        setIsReplay(true);
      });

      return () => clearTimeout(timer);
    }
  }, [roulette?.round_info?.status]);

  return (
    <Wrapper>
      <RouletteItems ref={diamondsRef} onTransitionEnd={transitionEndHandler}>
        {rouletteDiamonds.map((w, i) => {
          return (
            <RouletteItem
              key={i}
              isLoser={i !== diamondPrizeId && !isSpin && isSpinEnd}
              gem={w.gem}
            />
          );
        })}
      </RouletteItems>
    </Wrapper>
  );
};
