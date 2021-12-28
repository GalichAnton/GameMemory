import styles from './card.module.css'
import {ICard} from "../../types/ICard";
import {FC} from "react";
import cn from 'classnames'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {cardFlip} from "../../store/reducers/CardsSlice";


interface IProps {
  card: ICard
}

const Card: FC<IProps> = ({card}) => {
  const dispatch = useAppDispatch()
  const handleClick = (id:number) => {
    dispatch(cardFlip(id))
  }

  return (
      <div onClick={()=>handleClick(card.id)} className={cn(styles.card,{
        [styles.card_rotate] : card.isUp,
      })}>
        <div className={styles.back}>
          <img className={styles.img} src={card.imgUrl} alt=""/>
        </div>
        <div className={styles.front}>
          <div className={styles.backContent}>

          </div>
        </div>
      </div>
  );
}

export default Card;