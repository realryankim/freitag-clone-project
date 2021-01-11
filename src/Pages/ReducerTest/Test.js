import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import { addCart, deleteCart } from "../../Store/Action/index";

export default function Test() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cartReducer);
  console.log(items);
  return (
    <>
      <Header />
      <TestContainer>
        {ITEMS.map((el) => (
          <ButtonContainer>
            <Button onClick={() => dispatch(addCart(ITEMS[el.product_id - 1]))}>
              {el.product_id}번 상품 추가
            </Button>
            <Button
              onClick={() => dispatch(deleteCart(ITEMS[el.product_id - 1]))}
            >
              {el.product_id}번 상품 삭제
            </Button>
          </ButtonContainer>
        ))}

        <ItemContainer>
          <span>장바구니</span>
          {items.map((el) => (
            <p>상품 아이디 : {el.product_id}</p>
          ))}
        </ItemContainer>
      </TestContainer>
    </>
  );
}

const ITEMS = [
  { product_id: 1, price: 385000 },
  { product_id: 2, price: 19400 },
  { product_id: 3, price: 385000 },
  { product_id: 4, price: 19400 },
  { product_id: 5, price: 385000 },
  { product_id: 6, price: 19400 },
  { product_id: 7, price: 385000 },
  { product_id: 8, price: 19400 },
];

const ItemContainer = styled.div``;

const ButtonContainer = styled.div``;

const TestContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button``;
