import React, { useState } from "react";
import "./styles.css";

import SearchBar from "./components/SearchBar";

export default function App() {
  const [email, setEmail] = useState("");
  const handleEmailChange = e => {
    console.log(e);
  };
  return (
    <div className="App">
      <SearchBar onEmailChange={handleEmailChange} />
      {!email && <p>No Results!</p>}
      {email}
    </div>
  );
}
