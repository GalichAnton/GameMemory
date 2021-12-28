import Card from "../Card/Card";
import styles from './game.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useEffect} from "react";
import {fetchCards} from "../../store/reducers/ActionCreators";

const Game = () => {
  const dispatch = useAppDispatch()
  const {cards, isLoading, error} = useAppSelector(state => state.cardsReducer)
  useEffect(() => {
    dispatch(fetchCards())
  }, [])
  return (
      <>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        <div className={styles.game}>
          {cards.map((card) => (
              <Card key={card.id} card={card}/>
          ))}
        </div>
      </>
  );
};

export default Game;