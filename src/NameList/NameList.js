import React, { useState } from "react";

export default function NameList() {
  const [names, setNames] = useState(["Danilo", "Marko"]);
  const [newName, setNewName] = useState("");

  const saveName = () => {
    setNames([...names, newName]);
    setNewName("");
  };
  return (
    <div>
      <ul>
        {names.map((name) => {
          return <li>{name}</li>;
        })}
      </ul>
      <input
        value={newName}
        type="text"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <button onClick={saveName}>Save</button>
    </div>
  );
}
