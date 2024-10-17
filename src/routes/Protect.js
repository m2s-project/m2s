import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protect = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  // if (!user) {
  //   return <Navigate to="/" />
  // }

  return children
}

export default Protect
