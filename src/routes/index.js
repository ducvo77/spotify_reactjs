import Home from "../pages/Home";
import Search from "../pages/Search";

export const publicRoutes = [
  {
    path: "/*",
    compenent: <Home />,
  },
  {
    path: "/search",
    compenent: <Search />,
  },
];
