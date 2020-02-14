import React, { useState } from "react";
import data from "./data";
import SearchBar from "./components/SearchBar";

import "./styles.css";

export default function App() {
  console.log(data);
  return (
    <div className="App">
      <SearchBar />
      {/* {!email && <p>No Results!</p>}
      {email} */}
    </div>
  );
}
