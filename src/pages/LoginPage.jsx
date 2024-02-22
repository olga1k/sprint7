
export default function LoginPage({ formData, handleChange, handleSubmit, isSignUpActive, handleMethodChange, user }) {
  // Add a conditional check to ensure formData is defined
  if (!formData) {
    return null; // or any other fallback UI if needed
  }
/* after form
{isSignUpActive ? (
          <p>
            Already have an account?{" "}
            <a href="#" onClick={handleMethodChange}>
              Sign In
            </a>
          </p>
        ) : (
          <p>
            Do not have an account?{" "}
            <a href="#" onClick={handleMethodChange}>
              Sign Up
            </a>
          </p>
        )}

         {!user?.email && (
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      )}
*/
  return (
    <>
      <div className="form-wrapper">
        <h2>{isSignUpActive ? "Sign Up" : "Sign In"}</h2>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          {isSignUpActive && (
            <label htmlFor="username">Your Name</label>
          )}
          {isSignUpActive && (
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              name="username"
              onChange={(e) => handleChange(e)}
            />
          )}
          <label htmlFor="email">Your Email</label>
          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button className="login-btn" type="submit">
            {isSignUpActive ? "Sign Up" : "Sign In"}
          </button>
        </form>
        
      </div>
     
    </>
  );
}
