import { useRef } from "react";

function useScroll() {
  let elementname = useRef();
  const handlescrolltoup = (e) => {
    e.preventDefault();
    if (elementname.current) {
      elementname.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return [elementname, handlescrolltoup];
}
export default useScroll;
