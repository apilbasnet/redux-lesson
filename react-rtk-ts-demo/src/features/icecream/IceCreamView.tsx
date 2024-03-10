// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./iceCreamSlice";
import { useState } from "react";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCream = useAppSelector(
    (state) => state.iceCream.numOfIceCreams
  );
  console.log(numOfIceCream);
  const dispatch = useAppDispatch();
  console.log(value);
  return (
    <div>
      <h2>Number of Ice-cream : {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice-cream</button>\
      <label htmlFor="iceCreamInput">
        Number of Ice-cream:
        <input
          id="iceCreamInput"
          type="number"
          value={value}
          onChange={(e) => {
            setValue(Number(e.target.value));
          }}
        />
      </label>
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice-cream
      </button>
    </div>
  );
};
