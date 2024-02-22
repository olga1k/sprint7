import SocialMedia from "./SocialMedia";
import SignUp from "./SignUp";
import logo from "../assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
 const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
    navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };


  return (
    <header>
      <SocialMedia />
      <img className="logo" alt="star_wars_logo" src={logo}></img>
      <SignUp user={user} logout={handleLogout}/>
    </header>
  );
}
