import "./App.css";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/Auth";
import Ship from "./components/Ship";
import Header from "./components/Header";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useLocation } from "react-router-dom";

import { auth } from "./firebase";

function App() {
  

   const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, [location]); 

  return (
    <>
    <Header/>
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/ship/:shipName" element={<Ship />} />      
          </Route>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}
export default App;
