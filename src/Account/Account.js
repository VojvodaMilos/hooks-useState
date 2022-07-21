import React, { useState } from "react";

export default function Account() {
  const [account, setAccount] = useState({ name: "Milos", deposit: 1000 });
  return (
    <div>
      <h1>{account.name}</h1>
      <h1>{account.deposit}</h1>
      <input
        type="text"
        placeholder="deposite"
        onChange={(e) => {
          setAccount({ ...account, deposit: e.target.value });
        }}
      />
    </div>
  );
}
