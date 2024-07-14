import { Ref } from 'react';
import { Gem } from 'store/reducers/gameSlice';

export interface DiamondAttributes {
  gem: Gem;
}

export class Diamond {
  id: number;
  gem: Gem;

  constructor(id: number, attrs: DiamondAttributes) {
    this.id = id;
    this.gem = attrs.gem;
  }
}

export interface rouletteAttributes {
  diamond: DiamondAttributes;
  diamonds: DiamondAttributes[];
  rouletteContainerRef: Ref<HTMLElement>;
  diamondsRef: Ref<HTMLElement>;
  diamondsCount: number;
  transitionDuration?: number;
  itemWidth?: number;
}

// КЛАСС РУЛЕТКИ
export class Roulette {
  diamond: DiamondAttributes;
  allDiamonds: DiamondAttributes[];

  rouletteWrapper: Ref<HTMLElement>;
  diamondWrapper: Ref<HTMLElement>;

  diamonds: Diamond[];

  diamondsCount: number;
  diamondPrizeId: number;

  transitionDuration: number;

  itemWidth: number;

  constructor(attrs: rouletteAttributes) {
    this.diamond = attrs.diamond;
    this.allDiamonds = attrs.diamonds;
    this.diamonds = [];
    this.rouletteWrapper = attrs.diamondsRef;
    this.diamondWrapper = attrs.diamondsRef;
    this.diamondsCount = attrs.diamondsCount;
    this.diamondPrizeId = this.randomRange(this.diamondsCount / 2, this.diamondsCount - 5);
    this.transitionDuration = attrs.transitionDuration || 10;
    this.itemWidth = attrs.itemWidth || 200;
  }

  private randomRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private shuffle = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  setDiamonds = () => {
    let diamonds: Diamond[] = [];
    const diamondsLength = this.allDiamonds.length;

    const set_weapon_actors = (from_i: number, to_i: number) => {
      let j = 0;
      const createdDiamonds: Diamond[] = [];
      for (let i = from_i; i <= to_i; i += 1) {
        createdDiamonds.push(new Diamond(i, this.allDiamonds[j]));
        j = j === diamondsLength - 1 ? 0 : j + 1;
      }
      this.shuffle(createdDiamonds);
      return createdDiamonds;
    };

    if (diamondsLength === 0) {
      throw new Error('Ошибка! Нет алмазов.');
    }

    diamonds = diamonds.concat(set_weapon_actors(0, this.diamondPrizeId - 1));

    diamonds[this.diamondPrizeId] = new Diamond(this.diamondPrizeId, this.diamond);

    diamonds = diamonds.concat(set_weapon_actors(this.diamondPrizeId + 1, this.diamondsCount - 1));
    this.diamonds = diamonds;
  };

  spin = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const rouletteWidth = this.diamondWrapper?.current.offsetWidth;
    const currentEl = rouletteWidth / this.itemWidth / 2;
    const randStop = (this.diamondPrizeId - currentEl) * this.itemWidth + this.itemWidth / 2;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.diamondWrapper.current.style.transition = `left ${this.transitionDuration}s ease-out`;

    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.diamondWrapper!.current.style.left = `-${randStop}px`;
    }, 100);

    return this.diamondPrizeId;
  };
}
