import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const ProtectedRoute = ({ children }) => {
  const token = new Cookies().get("e-lgn-token");
  if (!token) {
    return <Navigate to={"/"} />;
  }
  return children;
};
export default ProtectedRoute;
