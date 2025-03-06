import React, { useState } from "react";
import { DarkModeContext } from "../components/DarkModeContext";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [password, setPassword] = useState("");

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <h1 className="text-3xl font-bold text-center mb-6">Settings</h1>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Profile Settings</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>


        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Account Security</h2>
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

    
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Notification Preferences</h2>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5"
            />
            <span>Enable Notifications</span>
          </label>
        </div>


        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Appearance</h2>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="w-5 h-5"
            />
            <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
          </label>
        </div>

    
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
};

export default Settings;
