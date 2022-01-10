import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import styles from "./clock.module.css";
const Clock: FC = (props) => {
  const timeCounter = useAppSelector((state) => state.timeReducer.timeCounter);
  const displayTime = (count: number) => {
    const addZero = (value: number) => (value < 10 ? "0" : "") + value;
    const seconds = count % 60;
    const fullMinutes = (count - seconds) / 60;
    const minutes = fullMinutes % 60;
    const hours = (fullMinutes - minutes) / 60;

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
  };

  return (
    <span className={styles.controls__time}>{displayTime(timeCounter)}</span>
  );
};

export default Clock;
