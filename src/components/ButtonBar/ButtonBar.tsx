import styles from "./buttonBar.module.css";
import Button from "../Button/Button";
import cn from "classnames";
import { FC } from "react";
import { setGameStatus, setWinStatus } from "../../store/reducers/GameSlice";
import {
  setResultFormStatus,
  setResultStatus,
} from "../../store/reducers/ResultSlice";
import { setTimeCounter } from "../../store/reducers/TimeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Clock from "../Clock/Clock";

const ButtonBar: FC = () => {
  const dispatch = useAppDispatch();
  const gameStatus = useAppSelector((state) => state.gameReducer.gameStatus);
  const handleStartGame = () => {
    dispatch(setGameStatus(true));
    dispatch(setWinStatus(false));
  };

  const handleStopGame = () => {
    dispatch(setGameStatus(false));
  };

  const handleWinning = () => {
    dispatch(setGameStatus(false));
    dispatch(setWinStatus(true));
  };

  const handleResultsClick = () => {
    dispatch(setResultStatus(true));
  };

  // Save new result (name, time) to local storage
  const handleSubmitName = (name: string, time: number) => {
    let results = [];
    const result = localStorage.getItem("game_results");
    if (result) {
      results = JSON.parse(result);
    }
    results.push({ name, time });
    localStorage.setItem("game_results", JSON.stringify(results));
    dispatch(setResultFormStatus(false));
    dispatch(setTimeCounter(0));
  };

  // Close results table
  const handleSubmitResults = () => {
    dispatch(setResultStatus(false));
  };
  return (
    <nav className={styles.controls}>
      <div className={styles.controls__btnContainer}>
        <Button
          className={cn(styles.controls__btn, styles.controls__btn_start)}
          disabled={gameStatus}
          onClick={handleStartGame}
          title="Start game"
        />

        <Button
          className={cn(styles.controls__btn, styles.controls__btn_pause)}
          disabled={!gameStatus}
          title="Pause game"
          onClick={handleStopGame}
        />

        <Button
          className={cn(styles.controls__btn, styles.controls__btn_results)}
          disabled={gameStatus}
          title="View results table"
          onClick={handleResultsClick}
        />
      </div>

      <div className={styles.controls__timeContainer}>
        <Clock />
      </div>
    </nav>
  );
};

export default ButtonBar;
