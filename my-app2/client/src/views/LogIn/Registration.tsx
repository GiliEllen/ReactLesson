import React from "react";
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Registration = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    async function handleSubmit(ev:any) {
      try {
          ev.preventDefault();
          const {data} = await axios.post("http://localhost:5555/api/users/register", {email, password})
          console.log(data)
      } catch (error) {
          console.error(error)
      }
    }
    return (
      <div className="register">
        <form onSubmit={handleSubmit}>
          <h3>Registration</h3>
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
          <button type="submit">Register</button>
          <Link
            style={{ textDecoration: "none" }}
            to={`/login`} >
            <p>Click if you are registered</p>
          </Link>
        </form>
      </div>
    );
}

export default Registration