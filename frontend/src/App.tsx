import { useRoutes, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./pages/app/Layout";

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
    {
      path: "/emulator",
      element: <Layout />,
    },
  ]);

  return routes;
};

function App() {
  const location = useLocation();

  // Check if the current route is "/emulator"
  const hideFooter = location.pathname === "/emulator";

  return (
    <div className="min-h-screen max-h-full md:max-h-screen md:justify-between flex flex-col">
      <Navbar />
      <Main />
      {!hideFooter && <Footer />}
    </div>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;
