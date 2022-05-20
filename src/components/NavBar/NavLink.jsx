import { useNavigate } from "react-router-dom";

const NavLink = ({ label, role, value, isActive }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (role.includes("redirect")) {
      navigate(value);
      return;
    }
    if (role.includes("function")) {
      value();
    }
  };

  return (
    <button
      className={`btn nav-link ${isActive && "nav-active-link"} `}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default NavLink;
