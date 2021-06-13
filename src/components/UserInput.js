import React from 'react';

const UserInput = ({
    setUser,
    value,
    onKeyDown
}) => {
    return (
        <div className="input-container">
            <input
                placeholder="Search users"
                className="mt-5 input"
                type="text"
                value={value}
                onChange={(e) => setUser(e.target.value)}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}

export default UserInput;
