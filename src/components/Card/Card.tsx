import styles from "./card.module.css";
import { ICard } from "../../types/ICard";
import { FC, useState } from "react";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { flipCard } from "../../store/reducers/CardsSlice";

interface IProps {
  card: ICard;
  id: number;
}

const Card: FC<IProps> = ({ card, id }) => {
  const dispatch = useAppDispatch();
  const flip = useAppSelector((state) =>
    state.cardsReducer.cards.find((card, i) => i === id)
  );
  const handleClick = (id: number) => {
    dispatch(flipCard(id));
  };

  return (
    <div
      onClick={() => handleClick(id)}
      className={cn(styles.card, {
        [styles.card_rotate]: card.flip,
      })}
    >
      <div className={styles.back}>
        <img className={styles.img} src={card.link} alt="" />
      </div>
      <div className={styles.front}>
        <div className={styles.backContent}></div>
      </div>
    </div>
  );
};

export default Card;
