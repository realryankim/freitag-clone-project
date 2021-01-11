import React, { useState, useEffect } from "react";
import Title from "./component/Title/Title";
import Detail from "./component/Detail/Detail";
import ExtraInfo from "./component/ExtraInfo/ExtraInfo";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import KimUrl from "../../Config/Url";

function Product(props) {
  const productId = useState(props.match.params.id);
  const [selected, setSelected] = useState({});
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${KimUrl}/product`);
    const { message } = await response.json();

    // const chunk = (arr, size) =>
    //   arr.reduce(
    //     (acc, e, i) => (
    //       i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
    //     ),
    //     []
    //   );
    // const firstArr = chunk(message, 6);
    // firstArr.unshift(firstArr[1]);
    // firstArr.pop();
    console.log("message", message[productId - 1]);

    setItems(message);
    setSelected(message[productId[0] - 1]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductPage>
      <Header />
      <Title />
      <Detail productId={productId} items={items} selected={selected} />

      <ExtraInfo />
    </ProductPage>
  );
}

export default Product;

const ProductPage = styled.main`
  margin: 0 auto;
`;
