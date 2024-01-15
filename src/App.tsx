import OtherPage from "./OtherPage";
import Home from "./Component/Home";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./Component/NavBar";
import ItemList from "./Component/ItemList";

function App() {
  return (
    <Router basename="/ts-testing">
      <div className="m-10">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/other" element={<OtherPage />} />
          <Route path="/itemsList" element={<ItemList />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
