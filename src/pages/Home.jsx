import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/home.css";

const Home = ({ onLogout }) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users/")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="home-container">
      <Navbar onLogout={onLogout} />

      <div className="users-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img width={100} height={100} src={user.avatar} alt={`${user.first_name}'s avatar`} />
            <h2>{user.first_name}</h2>
            <div className="email-box">{user.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
