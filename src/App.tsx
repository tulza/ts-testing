import Test from "./Components/Test.test";
import { Home } from "./Components";
import OtherPage from "./OtherPage";
import "./styles.css";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        {/* <Route path="/home" element={<Home />} />
          <Route path="/other" element={<OtherPage />} />
          <Route path="/test" element={<Test />} />*/}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
