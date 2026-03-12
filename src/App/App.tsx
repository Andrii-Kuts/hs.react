import Plan from "../Plan";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Project Domination</h1>
      <Plan />
    </div>
  );
}

export default App;
