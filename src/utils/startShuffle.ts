import { ICard } from "../types/ICard";

export function startShuffle(initArray: ICard[]) {
  const array = [...initArray.slice(), ...initArray.slice()];
  array.sort(() => {
    return Math.random() - 0.5;
  });

  return array;
}
