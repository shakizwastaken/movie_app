import { useEffect, useState } from "react";

import DropList from "../dropList/DropList";

const DropListMenu = ({ label, itemsList, value, setValue }) => {
  //open state: is true when its open.
  const [open, setOpen] = useState(false);

  //toggle menu list dropdown function.
  const toggleOpen = () => {
    setOpen(!open);
  };

  //render function
  const renderDropDown = () => {
    let items = [];
    itemsList.forEach((item) => {
      items.push({ item, setValue });
    });

    return (
      <div className="input-container">
        <label>{label}</label>
        <div className="input drop-menu-box" onClick={toggleOpen}>
          {value}
          {open && <DropList items={items} />}
        </div>
      </div>
    );
  };

  //press Escape close menu.
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (!open) return;
      if (e.key !== "Escape") return;
      else {
        setOpen(false);
      }
    });
  }, []);

  return <div className="drop-down-menu">{renderDropDown()}</div>;
};

export default DropListMenu;
