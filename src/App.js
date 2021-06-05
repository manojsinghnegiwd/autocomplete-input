import { useEffect, useState } from "react";
import "./App.css";

const users = [
  "Manoj Singh Negi",
  "Ravi sharma",
  "Joseph",
  "Rachel green",
  "Ross geller",
  "Matt black",
];

function App() {
  const [username, setUsername] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredUsers = users.filter(
    (user) =>
      user.toLowerCase().includes(username.toLowerCase()) &&
      user.length !== username.length
  );

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
        break;
      case 'ArrowDown':
        if (currentIndex < filteredUsers.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
        break;
      case 'Enter':
        setUsername(filteredUsers[currentIndex])
        break;
    }
  }

  useEffect(() => {
    setCurrentIndex(0)
  }, [filteredUsers.length])

  const isDropdownOpen = username.length && filteredUsers.length

  return (
    <div className="container">
      <div className="input-container">
        <input
          className="mt-5 input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={`dropdown ${isDropdownOpen ? 'is-active' : ''} `}>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {filteredUsers.map((user, index) => (
              <a key={index} onClick={() => setUsername(user)} className={`dropdown-item ${currentIndex === index ? 'is-active' : ''}`}>
                {user}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
