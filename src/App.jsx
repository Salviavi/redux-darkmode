import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/Home"; // Import Home page
import Login from "./pages/Login"; // Import Login page
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Local state to handle login

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  return (
    <Provider store={store}>
      {isLoggedIn ? <Home onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
    </Provider>
  );
};

export default App;
