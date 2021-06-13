import { useEffect, useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UsersList from "./components/UsersList";

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
      <UserInput
        setUser={setUsername}
        value={username}
        onKeyDown={handleKeyDown}
      />
      <UsersList
        isListVisible={isDropdownOpen}
        users={filteredUsers}
        onSelect={setUsername}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default App;
