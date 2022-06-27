import React from "react";
import "./style.css";   


const date = new Date();
const year = date.getFullYear();

export default function Footer(){
  return <footer>
    <p>copyright © {year}</p>
  </footer>
}