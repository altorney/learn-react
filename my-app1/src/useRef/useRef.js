import React, { useRef } from 'react';

const UseHookEg = () => {
  const inputRef = useRef(); // this can also be used to store if a component has been unmounted so that setSate cant be called on a unmounted componentn  look at 43;46  https://www.youtube.com/watch?v=f687hBjwFcM
  return (
    <div>
      <div>
        <input name="email" ref={inputRef} />
      </div>

      <button
        onClick={() => {
          inputRef.current.focus();
          console.log(inputRef.current);
        }}
      >
        update count
      </button>
    </div>
  );
};

export default UseHookEg;

//UPTO 46 MINS
