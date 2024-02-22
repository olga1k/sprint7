import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import LoginPage from "./LoginPage";

export default function Auth() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isSignUpActive, setIsSignUpActive] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
  
    const { email, password } = formData;
  
    if (isSignUpActive) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed up:", user);
          localStorage.setItem("user", JSON.stringify(formData));
          navigate("/main"); 
        })
        .catch((error) => {
          console.error("Signup error:", error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in:", user);
          navigate("/main");
        })
        .catch((error) => {
          console.error("Signin error:", error.message);
        });
    }
  }
  

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function validateForm() {
    const { username, email, password } = formData;
    if (!username || !email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  }

  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <LoginPage
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isSignUpActive={isSignUpActive}
      handleMethodChange={handleMethodChange}
      user={null}
    />
  );
}
