import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
function withGuard(Component) {
  return () => {
    const token = new Cookies().get("e-lgn-token");
    if (!token) {
      return (
        <div className="min-h-screen">
          <Navigate to={"/"} />;
        </div>
      );
    }
    return <Component />;
  };
}
export default withGuard;
