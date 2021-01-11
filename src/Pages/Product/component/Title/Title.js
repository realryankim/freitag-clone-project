import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import KimUrl from "../../../../Config/Url";

function Title() {
  const [allItem, setAllItem] = useState([]);
  const { id } = useParams();

  // const fetchData = async () => {
  //   const response = await fetch(`http://10.58.3.66:8000/product/${id}`);
  //   const { message } = await response.json();
  //   setAllItem(message);
  // };

  // useEffect(() => {
  // }, [allItem]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    fetch(`${KimUrl}/product/${id}`)
      .then((response) => response.json())
      .then((res) => {
        setAllItem(res.message);
      });
  }, []);

  return (
    <HeaderContainer>
      <HeaderTopLeft>
        <span>
          <a href="#/" alt="hi">
            Store
          </a>
        </span>
        <span> » </span>
        <span>
          <a href="#/" alt="hi">
            Apparel Female
          </a>
        </span>
        <span> » </span>
        <span>
          <Link to="/productlist" alt="productlist">
            T-Shirts
          </Link>
        </span>
      </HeaderTopLeft>
      <HeaderLeft>{allItem[0]?.title}</HeaderLeft>
      <HeaderBottomLeft>
        <h3>FEMALE SCOOP NECK, ￦{allItem[0]?.price}</h3>
        <span> {allItem[0]?.description}</span>
      </HeaderBottomLeft>
    </HeaderContainer>
  );
}

export default withRouter(Title);

const HeaderContainer = styled.header`
  padding-top: 100px;
  max-width: 1170px;
  margin: 0 auto;
  text-transform: uppercase;
  font-weight: bold;
`;

const HeaderTopLeft = styled.div`
  font-size: 14px;

  a:hover {
    color: gray;
    span {
      color: black;
    }
  }

  span:nth-child(2),
  span:nth-child(4) {
    font-size: 20px;
  }
`;

const HeaderLeft = styled.h1`
  font-size: 60px;
`;

const HeaderBottomLeft = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2px 0 4px;
  font-size: 22px;

  span {
    font-weight: 300;
    font-size: 19px;
  }
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
