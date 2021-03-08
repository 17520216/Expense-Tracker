import React from "react";
import { PlusOutlined } from "@ant-design/icons";

const Button = ({ color, rotate, onClick }) => {
  return (
    <button onClick={onClick} style={{ background: color }} className="btn add">
      {<PlusOutlined style={{ transform: `rotate(${rotate}deg)` }} />}
    </button>
  );
};

export default Button;
