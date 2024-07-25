import React from "react";

const ContextMenu = ({
  xPos,
  yPos,
  menuVisible,
  onOpen,
  onDelete,
  onProperties,
}) => {
  if (!menuVisible) return null;

  return (
    <div
      className="context-menu"
      style={{
        top: yPos,
        left: xPos,
        position: "absolute",
        zIndex: "1000",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0 2px 7px rgba(0,0,0,0.15)",
        padding: "8px 0",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ padding: "8px 16px", cursor: "pointer" }} onClick={onOpen}>
          Open
        </li>
        <li
          style={{ padding: "8px 16px", cursor: "pointer" }}
          onClick={onDelete}
        >
          Delete
        </li>
        <li
          style={{ padding: "8px 16px", cursor: "pointer" }}
          onClick={onProperties}
        >
          Properties
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
