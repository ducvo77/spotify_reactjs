import Header from "./Layouts/Header";
import SideBar from "./Layouts/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <SideBar />
        </div>
        <div>
          <Header />
          <Routes>
            {publicRoutes.map((publicRoute, index) => (
              <Route
                path={publicRoute.path}
                element={publicRoute.compenent}
                key={`route${index}`}
              ></Route>
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
