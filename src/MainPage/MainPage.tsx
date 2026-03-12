import Plan from "../Plan";
import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Project Domination</h1>
      <Plan />
    </div>
  );
}

export default MainPage;
