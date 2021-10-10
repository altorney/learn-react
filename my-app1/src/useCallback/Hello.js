import React, { memo } from "react";

// memo compares the props and if the props have changed then the component rerenders
export const Hello = memo(({ increment }) => {
  console.log("rendered again");
  return <button onClick={increment}>hello</button>;
});
