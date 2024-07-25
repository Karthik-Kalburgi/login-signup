import { useRoutes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

const Main = () => {

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
  ]);
  
  return routes;
};

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
