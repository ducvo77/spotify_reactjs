import Header from "./Layouts/Header";
import SideBar from "./Layouts/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import "./GlobalStyle/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper-sidebar">
          <SideBar />
        </div>
        <div className="wrapper-main">
          <div className="wrapper-header">
            <Header />
          </div>
          <div className="wrapper-content">
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
      </div>
    </Router>
  );
}

export default App;
