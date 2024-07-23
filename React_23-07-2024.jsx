import React, { Fragment, useReducer } from "react";

const ReducerHook = () => {
    console.log(useReducer());
  const [count, dispatchCount] = React.useReducer(reducer, 0);
  function reducer(state, e) {
        // console.log(e.target);
        // console.log(typeof state);
        state += 1
        console.log(state); 
        return state;
  }

  return (
    <Fragment>
      <div>count : {count}</div>
      <button onClick={dispatchCount}>increase</button>
    </Fragment>
  );
};

export default ReducerHook;



////////////////
import React, { useEffect } from "react";

const Axis = () => {
  const [axis, setAxis] = React.useState({ x: 0, y: 0 });
  
  // const [isTracking, setIsTracking] = React.useState(true);
  console.log(axis);
  function handleMouseMove(e) {
    // if (isTracking) {
      setAxis({ x: e.clientX, y: e.clientY });
    // }
  }

  // const handleClick = () => {
  //   setIsShown(prev => !prev);
  //   // setIsTracking(prev => !prev);
  // };

  //  const handleTracking = () => {
  // };

  useEffect(() => {
    const handleMouseMoveEvent = (e) => {
      handleMouseMove(e);
    };
    document.addEventListener("mousemove", handleMouseMoveEvent);
    // if (isTracking) {
    //   document.addEventListener("mousemove", handleMouseMoveEvent);
    // } else {
    //   document.removeEventListener("mousemove", handleMouseMoveEvent);
    // }

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveEvent);
      console.log("Removed from DOM");
    };
  }, []);

  return (
    <div id="window">
      {/* <p>{isShown && `X: ${axis.x}px, Y: ${axis.y}px`}</p>
      <button onClick={handleClick}>Hide/Show {isTracking ? "Stop" : "Start"}</button> */}
      <p>X: {axis.x}px, Y: {axis.y}px</p>
    </div>
  );
};

export default Axis;
/////////////////////////////
import React from "react";
import Axis from "./Axis";

function Toggle() {
    const [isShown, setIsShown] = React.useState(true);
    const handleClick = () => {
          setIsShown(prev => !prev);
          // setIsTracking(prev => !prev);
        };
  return (
    <div>
        {isShown && <Axis />}
      <button onClick={handleClick}>{isShown ? "Stop" : "Start"}</button>
    </div>
  );
}

export default Toggle;
