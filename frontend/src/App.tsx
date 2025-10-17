import React from "react";

const App : React.FC = () => {
  const handleLogin = (): void => {
    window.location.href = "http://localhost:4000/auth/github";
    // le backend Node.js is listning on port 400
  };

  return (
  <div className="app-container">
      <h1>Welcome to DevProof</h1>
      <button className="github-login-button" onClick={handleLogin}>
        Login with GitHub
      </button>
    </div>
  );
};

export default App;
