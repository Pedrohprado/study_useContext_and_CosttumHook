import React from "react";
import { GlobalContext } from "../context/GlobalContext";

const Produtcs = () => {
  const { test, setTest } = React.useContext(GlobalContext);

  function handleClick() {
    setTest(test + 1);
  }
  return (
    <div>
      <h1>{test}</h1>
      <button onClick={handleClick}>mais</button>
    </div>
  );
};

export default Produtcs;
