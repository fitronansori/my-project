/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRouteDashboard = ({ children, allowedRoles }) => {
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isAllowed = allowedRoles.includes(role);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }

    if (!isAllowed) {
      navigate("/home");
    }

    setLoading(true);
  }, [isLoggedIn, role, isAllowed, navigate]);

  return loading ? children : <div className="bg-white"></div>;
};
export default ProtectedRouteDashboard;
