import React from "react";
import logo from "../logo.svg";
import "./Card.css";

export default function Card(props) {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
            <h1>{props.title}</h1>
        </div>
        <div class="flip-card-back">
            <h1>{props.backTitle}</h1>
            <p>{props.backText}</p>
        </div>
      </div>
    </div>
  );
}