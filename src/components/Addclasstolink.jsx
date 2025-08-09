import { useEffect, useState } from "react";
import { useSeeLocation } from "./Functions/useScroll";

export const Addclasstolink = () => {
  const [yloc, setyloc] = useState(0);

  const activeTheNavlink = (location) => {
    if (location.pathname === "/main") {
      let elements = Array.from(document.querySelectorAll(".navlink"));
      // console.log(elements);
      elements.forEach((item) => item.classList.remove("Currentactive"));
      if (yloc > 700 && yloc < 1700) {
        // work
        elements[0].classList.add("Currentactive");
      } else if (yloc > 1700 && yloc < 2800) {
        // services
        elements[1].classList.add("Currentactive");
      } else if (yloc > 2800 && yloc < 3500) {
        // resume
        elements[2].classList.add("Currentactive")
      } else if (yloc > 3500 && yloc < 3900) {
        // elements[].classList.add("Currentactive")
      } else if (yloc > 3900 && yloc < 4500) {
        // aboutme

        elements[3].classList.add("Currentactive");
      } else if (yloc > 4500 && yloc < 5100) {
        // contact
        elements[4].classList.add("Currentactive");
      }
    }
  };
  let location = useSeeLocation();

  useEffect(() => {
    const handleScroll = () => {
      setyloc(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);


    activeTheNavlink(location);
    // console.log("lyoc", yloc)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [yloc]);
};
