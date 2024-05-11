import { useContext } from "react";
import styles from "../styles/components/ChallengeBox.module.css";
import { ChallengesContext } from "../context/ChallengesContext";
import { CountdownContext } from "../context/CountdownContext";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function challengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function challengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.failedChallengeButton}
              onClick={challengeFailed}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.completedChallengeButton}
              onClick={challengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Finalize um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
