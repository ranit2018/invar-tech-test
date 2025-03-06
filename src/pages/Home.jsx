import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "../components/Login";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
  }, []);

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />;
};

export default Home;
