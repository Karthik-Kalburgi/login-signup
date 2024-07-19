import { useRoutes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const Main = () => {
  const routes = useRoutes([
    {
      path: "/auth",
      element: <Home />,
    },
    {
      path: "/",
      element: <Auth />,
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
