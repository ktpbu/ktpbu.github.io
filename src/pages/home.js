import React from 'react'
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
        <div>This is the home pag for KTP.</div>
        <Link to={"/rush"}>This is how to link shit (check the home.js file)</Link>
    </div>
  );
}