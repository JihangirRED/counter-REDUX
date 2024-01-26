import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "../store/todoSlice";
import Button from "./Buttons";

const Counter = () => {
  const numbers = useSelector((state) => state.number1.numbers);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(increment());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div className="zero">
      <p>{numbers}</p>
      <Button handleClick={handleClick} handleReset={handleReset} />
    </div>
  );
};

export default Counter;
