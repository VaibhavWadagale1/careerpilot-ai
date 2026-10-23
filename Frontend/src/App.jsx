import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Landing from "./pages/landingPage";
import Login from "./pages/loginPage";
import Register from './pages/registerPage'
import DashboardPage from './pages/dashboardPage'
import Profile from './pages/profile/'

function App() {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              theme={theme}
              onTheme={handleTheme}
            />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;