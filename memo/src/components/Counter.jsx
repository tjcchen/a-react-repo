import React from "react";

const Counter = ({ children, value, onClick }) => {
  // children refer to inner content, including html tags
  console.log("Render: ", children);
  return (
    <>
      <div onClick={onClick}>
        {children}: {value}
      </div>
    </>
  );
};

// Return true if passing nextProps to render would return
// the same result as passing prevProps to render,
// otherwise return false.
// [Note] prevProps & nextProps containing all the props within a component
const areEqual = (prevProps, nextProps) => {
  // console.dir(prevProps);
  // console.dir(nextProps);
  return prevProps.value === nextProps.value;
};

// export default React.memo(Counter, areEqual);
export default React.memo(Counter);
