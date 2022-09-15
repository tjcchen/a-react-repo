import React, { useMemo } from "react";

const UseMemoDemo = ({ msg }) => {
  const sayMsg = (msg) => {
    console.log('say message method');
    return msg;
  };

  // const myReply = sayMsg(msg);
  // Normally we could use React.useMemo when we compute expensive value that
  // we don't want to compute it again and again when the component is rerendered
  const myReply = useMemo(() => sayMsg(msg), [msg]);

  return (
    <>
      <p>{myReply}</p>
    </>
  );
};

export default UseMemoDemo;
