import { AppDispatch } from "../store";
import { setTimeCounter } from "../reducers/TimeSlice";

export const ControlGame =
  (
    timeInterval: number,
    winStatus: boolean,
    gameStatus: boolean,
    savedTime: number
  ) =>
  (dispatch: AppDispatch) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      let expected = startTime + timeInterval;
      let secondsCount = 0;

      const next = () => {
        if (winStatus) {
          resolve(secondsCount);
        } else if (!gameStatus) {
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
