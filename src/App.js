import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserListComponent from "./components/UserListComponent";
import UserDetailsComponent from "./components/userDetails/UserDetailsComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserListComponent />} />
        <Route path="/:userId" element={<UserDetailsComponent />} />
      </Routes>
    </div>
  );
}

export default App;
