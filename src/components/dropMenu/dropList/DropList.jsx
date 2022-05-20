import "./DropList.css";

const DropList = ({ items }) => {
  const renderItems = () => {
    return items.map(({ item, setValue }, index) => (
      <div
        key={index}
        className="drop-item"
        onClick={() => {
          setValue(item);
        }}
      >
        {item}
      </div>
    ));
  };

  return <div className="drop-menu">{renderItems()}</div>;
};

export default DropList;
