import OtherPage from "./OtherPage";
import Home from "./Components/Home";
import "./styles.css";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ItemList from "./Components/ItemList";
// import Test from "./Component/Test.test";
import Test from "./Components/Test.test";

function App() {
  return (
    <Router>
      <div className="m-10">
        {/* <NavBar /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/other" element={<OtherPage />} />
          <Route path="/itemsList" element={<ItemList />} />
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Navigate to="/test" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
