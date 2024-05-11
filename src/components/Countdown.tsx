import { useContext } from "react";
// import { ChallengesContext } from "../context/ChallengesContext";

import cx from "classnames";
import styles from "../styles/components/Countdown.module.css";
import { CountdownContext } from "../context/CountdownContext";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    resetCountdown,
    countdownIniciated,
    isActive,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <>
      <div className={styles.countdown}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.startCycleButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={cx(
                styles.startCycleButton,
                styles.startCycleButtonActive
              )}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.startCycleButton}
              onClick={countdownIniciated}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </>
  );
}
