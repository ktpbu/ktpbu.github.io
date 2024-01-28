import React from 'react'
import { Link } from "react-router-dom";
import { Navbar } from '../components/navbar/navbar'; // Import the navbar componenet into all files.

export const Home = () => {
  return (
    <div>
        <Navbar />
        <div>This is the home pag for KTP.</div>
        <Link to={"/rush"}>This is how to link shit (check the home.js file)</Link>
    </div>
  );
}