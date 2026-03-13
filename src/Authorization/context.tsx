/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";

type UserData =
  | {
      loggedIn: false;
    }
  | {
      loggedIn: true;
      username: string;
    };

type AuthorizationData = {
  userData: UserData;
  logIn: (username: string) => void;
  logOut: () => void;
};

const AuthorizationContext = createContext<AuthorizationData | undefined>(
  undefined,
);

export const AuthorizationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserData>({ loggedIn: false });
  const context = useMemo(
    () => ({
      userData,
      logIn: (username: string) => setUserData({ loggedIn: true, username }),
      logOut: () => setUserData({ loggedIn: false }),
    }),
    [userData],
  );

  return (
    <AuthorizationContext.Provider value={context}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export function useAuthorization(): AuthorizationData {
  const context = useContext(AuthorizationContext);
  if (!context) throw new Error("Requires authorization context");
  return context;
}
