import React from "react";

const Counter = ({ children, value }) => {
  // children refer to inner content, including html tags
  console.log("Render: ", children);
  return (
    <>
      <div>
        {children}: {value}
      </div>
    </>
  );
};

export default React.memo(Counter);
