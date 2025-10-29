import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userType = localStorage.getItem("userType");

    if (isAuthenticated && userType) {
      if (userType === "alumno") navigate("/alumno");
      else if (userType === "profesor") navigate("/profesor");
      else if (userType === "admin") navigate("/admin");
    }
  }, [navigate]);

  return <Login />;
};

export default Index;
