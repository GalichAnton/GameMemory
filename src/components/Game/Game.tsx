import Card from "../Card/Card";
import styles from "./game.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect, useRef } from "react";
import { setInitialCards } from "../../store/reducers/CardsSlice";
import { startShuffle } from "../../utils/startShuffle";
import { gameCards } from "../../utils/cardData";
import ButtonBar from "../ButtonBar/ButtonBar";
import { setSavedTime, setTimeCounter } from "../../store/reducers/TimeSlice";
import {
  setResultFormStatus,
  setResultStatus,
} from "../../store/reducers/ResultSlice";
import { setGameStatus, setWinStatus } from "../../store/reducers/GameSlice";

const Game = () => {
  const dispatch = useAppDispatch();
  const { cards } = useAppSelector((state) => state.cardsReducer);
  const gameStatus = useAppSelector((state) => state.gameReducer.gameStatus);
  const winStatus = useAppSelector((state) => state.gameReducer.winStatus);
  const timeCounter = useAppSelector((state) => state.timeReducer.timeCounter);
  const savedTime = useAppSelector((state) => state.timeReducer.savedTime);
  const resultStatus = useAppSelector(
    (state) => state.resultReducer.resultStatus
  );
  const resultFormStatus = useAppSelector(
    (state) => state.resultReducer.resultFormStatus
  );

  const gameStatusRef = useRef(gameStatus);
  const winStatusRef = useRef(winStatus);
  gameStatusRef.current = gameStatus;
  winStatusRef.current = winStatus;
  console.log(gameStatusRef.current);
  useEffect(() => {
    const initialCards = startShuffle(gameCards);
    dispatch(setInitialCards(initialCards));
  }, []);

  useEffect(() => {
    const controlGame = (timeInterval: number) => {
      return new Promise((resolve, reject) => {
        const startTime = Date.now();
        let expected = startTime + timeInterval;
        let secondsCount = 0;

        const next = () => {
          if (winStatusRef.current) {
            resolve(secondsCount);
          } else if (!gameStatusRef.current) {
            reject(secondsCount);
          } else {
            const dt = Date.now() - expected;
            if (dt < timeInterval) {
              secondsCount =
                savedTime + Math.floor((expected - startTime) / 1000);
              dispatch(setTimeCounter(secondsCount));
              expected += timeInterval;
              setTimeout(next, Math.max(0, timeInterval - dt));
            }
          }
        };
        setTimeout(next, timeInterval);
      });
    };

    if (gameStatus) {
      controlGame(1000)
        .then((result) => {
          // console.log('Success ', result);
          dispatch(setSavedTime(0));
          dispatch(setResultFormStatus(true));
        })
        .catch((result) => {
          // console.log('Pause ', result);
          dispatch(setSavedTime(result));
        });
    }
  }, [gameStatus, winStatus, savedTime]);

  return (
    <>
      <div className={styles.main}>
        <ButtonBar />
        <div className={styles.game}>
          {cards.map((card, i) => (
            <Card key={i} card={card} id={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
