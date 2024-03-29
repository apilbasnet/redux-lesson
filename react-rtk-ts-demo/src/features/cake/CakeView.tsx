// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of Cakes : {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cakes</button>
      <button onClick={() => dispatch(restocked(3))}>Restock cakes</button>
    </div>
  );
};
