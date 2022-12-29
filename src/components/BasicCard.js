import React from "react";
import "./Card.css";

export default function BasicCard(props) {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
            <h1>{props.title}</h1>
        </div>
        <div class="flip-card-back">
            <h1>{props.shortTitle}</h1>
            <p>{props.action}</p>
        </div>
      </div>
    </div>
  );
}