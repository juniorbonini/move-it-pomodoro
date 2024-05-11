import { useContext } from "react";
import styles from "../styles/components/LevelUpModal.module.css";
import { ChallengesContext } from "../context/ChallengesContext";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.modal_container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo nível</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" />
        </button>
      </div>
    </div>
  );
}
