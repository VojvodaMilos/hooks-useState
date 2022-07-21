//hooks

import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="container text-center">
      <h1>{name}</h1>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
