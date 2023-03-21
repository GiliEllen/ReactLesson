import React from "react";
import { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from "../../hooks/useOnlineStatus";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { isOnline, handleOnline, handleOfline } = useOnlineStatus();

  if(isOnline)  LogOut();

  async function LogOut() {
    try {
      const {data} = await axios.get("http://localhost:5555/api/users/logout")
    } catch (error) {
      console.error(error)
    }
  }

  async function handleSubmit(ev:any) {
    try {
        ev.preventDefault();
        const {data} = await axios.post("http://localhost:5555/api/users/login", {email, password})
    } catch (error) {
        console.error(error)
    }
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h3>LogIn</h3>
        <input
          value={email}
          type="email"
          placeholder="email"
          required
          onInput={(ev: any) => {
            setEmail(ev.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="password"
          required
          onInput={(ev: any) => {
            setPassword(ev.target.value);
          }}
        />
        <Link to={onLine ? "/" : "/login"}><button type="submit">Login</button></Link>
        <Link
          style={{ textDecoration: "none" }}
          to={`/registration`} >
          <p>Click if you are not registered</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;