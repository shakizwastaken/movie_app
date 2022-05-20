import { useRef, useEffect } from "react";
import "./cursor.css";

const Cursor = () => {
  const cursor = useRef(undefined);

  const followCursor = (e) => {
    cursor.current.style.left = e.pageX + "px";
    cursor.current.style.top = e.pageY + "px";
  };

  const hideCursor = (e) => {
    cursor.current.className = "hidden-cursor";
  };

  const showCursor = (e) => {
    cursor.current.className = "active-cursor round-cursor";
  };

  const onHover = (e, el) => {
    cursor.current.style.height = el.offsetHeight + "px";
    cursor.current.style.width = el.offsetWidth + "px";

    cursor.current.classList.add("box-cursor");
    cursor.current.classList.remove("round-cursor");
  };

  const onUnhover = (e, el) => {
    document.addEventListener("mousemove", followCursor);
    cursor.current.style.height = null;
    cursor.current.style.width = null;

    cursor.current.classList.remove("box-cursor");
    cursor.current.classList.add("round-cursor");
  };

  const manageElements = (selector) => {
    let elements = document.querySelectorAll(selector);

    elements.forEach((element) => {
      element.addEventListener("mouseenter", (e) => {
        onHover(e, element);
      });
    });

    elements.forEach((element) => {
      element.addEventListener("mouseleave", (e) => {
        onUnhover(e, element);
      });
    });
  };

  document.addEventListener("mousemove", followCursor);
  document.addEventListener("mouseleave", hideCursor);
  document.addEventListener("mouseenter", showCursor);

  useEffect(() => {
    manageElements("button");
    manageElements(".drop-item");
    manageElements("input");
    manageElements(".drop-menu-box");
  });

  return <div ref={cursor} id="cursor" className={"round-cursor"}></div>;
};

export default Cursor;
