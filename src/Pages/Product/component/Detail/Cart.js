import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KimUrl from "../../../../Config/Url";
import { useHistory } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";

function Cart({ allItem }) {
  const [count, setCount] = useState(1);
  const history = useHistory();

  const fetchData = async () => {
    const response = await fetch(`${KimUrl}/product`);
    // const { message } = await response.json();
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleCart = () => {
    fetch(`${KimUrl}/Cart`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        product_id: allItem[0].product_id,
        size_id: allItem[0].size[0].id,
        count: count,
      }),
    });

    history.push("/Cart");
  };

  console.log(allItem[0].size[0].id);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };

  return (
    <div>
      <ProductCount>
        <FiMinusSquare
          style={{ cursor: "pointer" }}
          onClick={decrement}
          size="35"
        />
        <ProductNumber>{count}</ProductNumber>
        <FiPlusSquare
          style={{ cursor: "pointer" }}
          onClick={increment}
          size="35"
        />
      </ProductCount>
      <CartBtn onClick={() => handleCart()}>
        <HiShoppingCart size="25" />
        <span>ADD TO CART</span>
      </CartBtn>
    </div>
  );
}

export default Cart;

const ProductCount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductNumber = styled.span`
  margin: 0 10px;
  font-size: 25px;
  font-weight: bold;
`;

const CartBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background-color: #000;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
