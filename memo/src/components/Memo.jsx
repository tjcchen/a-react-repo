// Both React.useMemo and React.useCallback receives a function as its first argument and a dependencies array as the second one.
// The hook will return a new value only when one of the dependencies value changes (referential equality).
// The main difference is that React.useMemo will call the getStr and return its result
// while React.useCallback will return the getStr without calling it.
import React, { useCallback, useMemo } from "react";

export default function Memo() {
  const getStr = () => {
    return 'useMemo & useCallback hooks';
  };

  // useMemo returns a memoized value
  // useCallback returns a memoized callback
  // useMemo call the function and return its result
  // useCall return the function without calling it
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
