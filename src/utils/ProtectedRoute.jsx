/* import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoute = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out"))
      .catch((error) => console.log(error));
  };
  return <Outlet/>;

};

export default ProtectedRoute;

*/



// ProtectedRoute.js
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    // If user is not signed in, navigate to login page
    return <Navigate to="/signup" />;
  }

  // If user is signed in, render the protected content
  return <Outlet />;
};

export default ProtectedRoute;
