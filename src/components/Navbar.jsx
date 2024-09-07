import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import "../styles/navbar.css"

const Navbar = ({ onLogout }) => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <nav className={`navbar ${mode}`}>
      <h1>My App</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Switch to {mode === "light" ? "Dark" : "Light"} Mode
      </button>
      {onLogout && <button onClick={onLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
