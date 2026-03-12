import { Route, Routes } from "react-router";
import AppLayout from "../AppLayout";
import MainPage from "../MainPage";
import FileViewer from "../FileViewer";

function App() {
  return (
    <Routes>
      <Route Component={AppLayout} />
      <Route path="/" Component={MainPage} />
      <Route path="/file/:slug" Component={FileViewer} />
    </Routes>
  );
}

export default App;
