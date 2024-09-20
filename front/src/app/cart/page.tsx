"use client";

import { addInCart } from "@/lib/features/cartReducer";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const count = useSelector((state: any) => state.counter.cart);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <div
      style={{
        perspective: "1000px",
        background: "red",
        width: "100px",
        height: "100px",
      }}
    >
      <div
        style={{
          background: "green",
          width: "100px",
          height: "100px",
          transform: " translateZ(-500px)",
        }}
      ></div>
    </div>
  );
};

export default Cart;
