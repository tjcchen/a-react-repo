import React, { useCallback, useMemo } from "react";

export default function Memo() {
  const getStr = () => {
    return 'useMemo & useCallback hooks';
  };

  const useMemoResult = useMemo(getStr, []);
  const useCallbackResult = useCallback(getStr, []);

  console.log('useMemoResult: ', useMemoResult);
  console.log('useCallbackResult: ', useCallbackResult);

  return (
    <>
      <p>useMemo & useCallback</p>
    </>
  );
}
