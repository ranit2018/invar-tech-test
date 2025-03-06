import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
   
    if (!localStorage.getItem("isAuthenticated") === "true") {
      navigate("/");
    }

  }, [])
  

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Welcome User</h2>        
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 w-full rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
