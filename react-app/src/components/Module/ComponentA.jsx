import useIsMobile from "../../hooks/useIsMobile";
import useNumber from "../../hooks/useNumber";

export default function ComponentA() {
  const number = useNumber();
  const isMobile = useIsMobile();

  console.log(number, "ComponentA");
  console.log(isMobile, "isMobile");

  return <></>;
}
