import React, { useEffect, useState } from 'react';

// function expensiveFunction() {
//   //do some thing expensive
//   return 10;
// }

const UseHookEg = () => {
  useEffect(() => {
    console.log("i've been rendered");
  });

  // firing this function causes the component to rerender each time
  const clickHandle = () => {
    // setCount(count + 1); if you just have one value ie no object in useState
    setCount((currentState) => ({
      ...currentState,
      count1: currentState.count1 + 1,
    }));
  };
  // if you have an expensive function that needs to be run to initialise setState then do the following line. Note its outside the main function
  // const [count, setCount]= setState(()=> expensiveFunction())

  //count is the state and setCount updates the value
  // const [count, setCount] = useState(10);
  // if its an object
  const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });

  return (
    <div>
      <button onClick={() => clickHandle()}>update count</button>
      <div>count 1- {count1}</div>
      <div>count 2- {count2}</div>
    </div>
  );
};

export default UseHookEg;
