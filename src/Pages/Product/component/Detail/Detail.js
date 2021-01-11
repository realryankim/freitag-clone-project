import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";
import styled from "styled-components";
import KimUrl from "../../../../Config/Url";

function Detail({ productId, items, selected }) {
  // const [selected, setSelected] = useState({});
  const [allItem, setAllItem] = useState([]);
  const { id } = useParams();

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("http://localhost:3000/Data/ProductData.json")
  //       .then((response) => response.json())
  //       .then((res) => {
  //         const allShirts = res.product[0].sub;
  //         setAllItem(res.product[0]);
  //         setSelected(allShirts[productId - 1]);
  //       });
  //   }, 2000);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      fetch(`${KimUrl}/product/${id}`)
        .then((response) => response.json())
        .then((res) => {
          const allShirts = res;
          setAllItem(res.message);
          // console.log("여기!", res.message.product_id);
        });
    }, 3000);
  }, []);

  // const handleCart = () => {};

  if (allItem.length === 0)
    return (
      <LoadingImage>
        {/* <span>로딩 중</span> */}
        <img
          src="https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif"
          alt="Running Pikachu for loading"
        />
      </LoadingImage>
    );

  return (
    <DetailContainer>
      <DetailBlack>
        <DetailWhite>
          <DetailLeft url={allItem[0].detailImage} />
          <DetailRight
            url={allItem[0].detailImage}
            allItem={allItem}
            selected={selected}
            items={items}
          />
        </DetailWhite>
      </DetailBlack>
    </DetailContainer>
  );
}

export default Detail;

const DetailContainer = styled.article`
  width: 100%;
  margin: 0 auto;
`;

const DetailBlack = styled.section`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: black;
  margin-bottom: 50px;
  margin-top: 3em;
`;

const DetailWhite = styled.section`
  max-width: 1170px;
  display: flex;
  margin: 20px auto;
  background-color: #fff;
`;

const LoadingImage = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: auto;
  }
`;
