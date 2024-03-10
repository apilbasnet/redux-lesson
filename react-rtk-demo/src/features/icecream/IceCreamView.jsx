// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
import { useState } from "react";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCreams);
  console.log(numOfIceCream);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <div>
      <h2>Number of Ice-cream : {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice-cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={() => dispatch(restocked(Number(value)))}>
        Restock Ice-cream
      </button>
    </div>
  );
};
