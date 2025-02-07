import React from "react";
import UserCard from "./UserCard";
import "./App.css"; // Import the CSS file for styling

function App() {
  return (
    <div className="app-container">
      {/* Background Stars */}
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div className="star" key={i}></div>
        ))}
      </div>

      {/* User Profile Card */}
      <UserCard />
    </div>
  );
}

export default App;

