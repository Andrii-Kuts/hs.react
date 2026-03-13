import { Route, Routes } from "react-router";
import AppLayout from "../AppLayout";
import MainPage from "../MainPage";
import FileViewer from "../FileViewer";
import LogInPage from "../Authorization/LogInPage";
import { AuthorizationProvider } from "../Authorization";

function App() {
  return (
    <AuthorizationProvider>
      <Routes>
        <Route Component={AppLayout} />
        <Route path="/" Component={MainPage} />
        <Route path="/login" Component={LogInPage} />
        <Route path="/file/:slug" Component={FileViewer} />
      </Routes>
    </AuthorizationProvider>
  );
}

export default App;
