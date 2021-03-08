import React from "react";
import Button from "./Button";

export const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>{title}</h2>

      <Button
        onClick={onAdd}
        color={showAdd ? "red" : "green"}
        rotate={showAdd ? "45" : "0"}
      />
    </div>
  );
};
