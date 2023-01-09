import { useEffect, useState } from "react";

export const Hello = ({ text = "hello" }) => {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <div className="font-3xl">
      <p>
        {text} {state}
      </p>
      <button onClick={() => setState((prev) => prev + 1)}>+1</button>
    </div>
  );
};
