import ProfilePanel from "../Authorization/ProfilePanel";
import Plan from "../Plan";
import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Project Domination</h1>
        <ProfilePanel />
      </div>
      <Plan />
    </div>
  );
}

export default MainPage;
