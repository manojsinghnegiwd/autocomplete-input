import React from "react";

const UsersList = ({
  isListVisible,
  users,
  currentIndex,
  onSelect
}) => {
  return (
    <div className={`dropdown ${isListVisible ? "is-active" : ""} `}>
      <div className="dropdown-menu" id="dropdown-menu">
        <div className="dropdown-content">
          {users.map((user, index) => (
            <a
              key={index}
              onClick={() => onSelect(user)}
              className={`dropdown-item ${
                currentIndex === index ? "is-active" : ""
              }`}
            >
              {user}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
