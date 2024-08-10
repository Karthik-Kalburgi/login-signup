import { useRoutes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Main = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return routes;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen max-h-screen justify-between flex flex-col">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
