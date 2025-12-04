import React from 'react';
import './GitHubLoginButton.css';

const GitHubLoginButton = () => {
  return (
    <button className="github-login-button" onClick={handleLogin}> 
      Login with GitHub
    </button>
  );
};

export default GitHubLoginButton;