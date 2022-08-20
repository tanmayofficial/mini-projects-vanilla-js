//Code sandbox code
import React, { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  return (
    <div className="App">
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h4>My name is: {name}</h4>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus on textbox
      </button>
    </div>
  );
}
