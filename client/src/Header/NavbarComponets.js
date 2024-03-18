import React, { useState } from 'react';

const NavbarComponent = () => {
    // State to manage login/logout
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle login/logout
    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div className="flex justify-between items-center bg-gray-800 text-white py-4 px-6">
            <div className="logo text-xl font-bold">Pune Electronic</div>
            <div className="flex space-x-4">
                {
                    isLoggedIn ? (
                        <div>
                            <button onClick={handleLoginLogout} className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">Logout</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={handleLoginLogout} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Login</button>
                        </div>
                    )
                }
                <div>
                    <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Account</button>
                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;
