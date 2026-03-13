import { useState } from "react";
import { useAuthorization } from "../context";
import { useNavigate } from "react-router";

export const LogInPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const auth = useAuthorization();
  const navigate = useNavigate();

  function formatUsername() {
    setUsername(username.trim());
  }

  function checkUsername() {
    if (username.length == 0 || username.length > 20) return false;
    return true;
  }

  function logIn() {
    formatUsername();
    if (!checkUsername()) return;
    auth.logIn(username);
    navigate("/");
  }

  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onBlur={() => formatUsername()}
      />
      <button onClick={logIn}>Log In</button>
    </div>
  );
};

export default LogInPage;
