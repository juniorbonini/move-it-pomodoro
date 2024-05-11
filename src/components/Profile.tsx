import { useContext } from "react";
import styles from "../styles/components/Profile.module.css";
import { ChallengesContext } from "../context/ChallengesContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/53886825?v=4" />
      <div>
        <strong>Luiz Augusto</strong>
        <p>
          <img src="icons/level.svg" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
