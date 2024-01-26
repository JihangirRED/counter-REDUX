import React from "react";

const Buttons = ({ handleClick, handleReset }) => {
  return (
    <div className="buttons">
      <div className="button1">
        {/* <p>Counter</p> */}
        <button onClick={handleClick}>
          <img
            className="icon1"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
            alt=""
          />
        </button>
      </div>
      <div className="button2">
        <button onClick={handleReset}>
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/5632/5632370.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
