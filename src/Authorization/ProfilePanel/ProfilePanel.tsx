import { Link } from "react-router";
import { useAuthorization } from "../context";
import styles from "./ProfilePanel.module.css";
import classNames from "classnames";

export const ProfilePanel: React.FC = () => {
  const auth = useAuthorization();

  if (!auth.userData.loggedIn) {
    // todo
    return (
      <div className={styles.profile_panel}>
        <Link className={classNames("button", styles.login_button)} to="/login">
          Log In
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.profile_panel}>
      <span className={styles.username}>{auth.userData.username}</span>
      <button
        className={classNames("button", styles.logout_button)}
        onClick={auth.logOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default ProfilePanel;
