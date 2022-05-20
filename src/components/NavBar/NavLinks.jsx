import NavLink from "./NavLink";

const NavLinks = ({ addMovieRef }) => {
  const scrollToAddMovie = () => {
    addMovieRef.current.scrollIntoView();
  };

  const links = [
    {
      key: 0,
      label: "Home",
      role: "redirect",
      value: "/",
      isActive: true,
    },
    {
      key: 1,
      label: "AddMovie",
      role: "function",
      value: scrollToAddMovie,
      isActive: false,
    },
  ];

  const renderLinks = () => {
    return links.map((link) => <NavLink {...link} />);
  };

  return <div className="nav-links">{renderLinks()}</div>;
};

export default NavLinks;
