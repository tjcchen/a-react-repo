import useIsMobile from "../../hooks/useIsMobile";
import useNumber from "../../hooks/useNumber";

export default function ComponentB() {
  const number = useNumber();
  const isMobile = useIsMobile();

  console.log(number, "ComponentB");
  console.log(isMobile, "isMobile");

  return <></>;
}
