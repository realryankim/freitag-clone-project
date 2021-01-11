import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { URL, kimURL } from "../../Config/Url";
import Header from "../../Components/Header/Header";
import CartItem from "./Component/CarItem";
import { ShoppingCart } from "@styled-icons/material";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleCount = (id, className, index) => {
    const productsCopy = [...products];
    const clickedItem = products.find(item => item.product_id === id);
    const clickedIdx = products.findIndex(item => item.product_id === id);
    productsCopy[clickedIdx] = clickedItem;

    if (className === "plusBtn") {
      clickedItem.count++;
      updateFech("+", index);
      setProducts([...productsCopy]);
    } else {
      clickedItem.count--;
      updateFech("-", index);
      setProducts([...productsCopy]);
    }
  };

  const updateFech = async (btn, index) => {
    try {
      const result = await axios.patch(
        `${kimURL}/cart/${products[index].id}`,
        {
          cart_button: btn,
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
    } catch (err) {}
  };

  const handleRemove = async (id, index) => {
    try {
      const result = await axios.delete(
        `${kimURL}/cart/${products[index].id}`,
        {
          headers: { Authorization: localStorage.getItem("token") },
        },
        {}
      );
    } catch (err) {}

    const temp = [...products];
    const filteredItems = temp.filter(item => item.product_id !== id);
    setProducts(filteredItems);
  };

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { cart_list },
      } = await axios.get(`${kimURL}/cart`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setProducts(cart_list);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const totalPrice = products.reduce((acc, item) => {
      return acc + item.count * item.price;
    }, 0);
    setTotalPrice(totalPrice);
  }, [products]);

  useEffect(() => {
    const totalAmount = products.reduce((acc, item) => {
      return acc + item.count;
    }, 0);
    setTotalAmount(totalAmount);
  }, [products]);

  return (
    <CartContainer>
      <Header />
      <CartBox>
        <CartTitle>SHOPPING CART</CartTitle>
        <CartCount>{totalAmount} Items</CartCount>

        {products.length > 0 ? (
          <CartList>
            {products.map((cartProduct, index) => {
              return (
                <CartItem
                  index={index}
                  key={index}
                  product={cartProduct}
                  handleCount={handleCount}
                  setProducts={setProducts}
                  handleRemove={handleRemove}
                />
              );
            })}
          </CartList>
        ) : (
          <EmptyCartList>
            <li>장바구니 상품이 없습니다.</li>
          </EmptyCartList>
        )}
        <CartTotal>
          <CartText>TOTAL</CartText>
          <TotalPrice>₩ {totalPrice.toLocaleString()}</TotalPrice>
        </CartTotal>
        <CartBottom>
          <Back>← BACK TO STORE</Back>
          <CartBtn>
            <ShoppingCartIcon />
            <span>PROCEED TO CHECKOUT</span>
          </CartBtn>
        </CartBottom>
      </CartBox>
    </CartContainer>
  );
}

const CartContainer = styled.section`
  width: 100%;
`;

const CartBox = styled.div`
  margin: 0 auto;
  padding: 100px 20px 0;
  width: 1170px;
`;

const CartTitle = styled.h3`
  font-size: 30px;
  line-height: 1.2;
`;

const CartCount = styled.p`
  font-size: 19px;
`;

const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  border-top: 1px solid #ececec;
`;

const EmptyCartList = styled.ul`
  display: flex;
  margin-top: 24px;
  height: 280px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #cecece;
  justify-content: center;
  align-items: center;
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const CartText = styled.h4`
  font-size: 19px;
  font-weight: bold;
`;

const TotalPrice = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-align: right;
`;

const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 24px;
`;

const Back = styled.p`
  font-size: 16px;
  cursor: pointer;
`;

const CartBtn = styled.button`
  padding: 12px 24px;
  background-color: #000;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;

const ShoppingCartIcon = styled(ShoppingCart)`
  color: white;
  width: 24px;
  margin-right: 4px;
`;
