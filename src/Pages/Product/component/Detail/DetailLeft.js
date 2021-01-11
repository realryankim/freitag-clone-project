import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdAutorenew, MdRemoveRedEye } from "react-icons/md";
import { IoMdMan } from "react-icons/io";

function DetailLeft({ url }) {
  const settings = {
    arrows: false,
    dotsClass: "slick-dots slick-thumb",
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <LeftBox>
      <Nav>
        <ProductSlick>
          <MdAutorenew size="24" />
          <SlickName>PRODUCT</SlickName>
        </ProductSlick>
        <ProductSlick>
          <MdRemoveRedEye size="24" />
          <SlickName>DETAILS</SlickName>
        </ProductSlick>
        <ProductSlick>
          <IoMdMan size="24" />
          <SlickName>STYLE</SlickName>
        </ProductSlick>
      </Nav>
      <Slider {...settings}>
        <Picture>
          <ProductImg
            src={`https://ifh.cc/g/${url[0].split("-")[1]}`}
            alt="T-shirts"
          />
        </Picture>
        <Picture>
          <ProductImg
            src={`https://ifh.cc/g/${url[1].split("-")[1]}`}
            alt="T-shirts"
          />
        </Picture>
      </Slider>
    </LeftBox>
  );
}

export default DetailLeft;

const LeftBox = styled.section`
  width: 40%;
  margin-bottom: 30px;
`;

const Nav = styled.nav`
  display: flex;
  padding: 20px 10px 20px 10px;
`;

const ProductSlick = styled.div`
  display: flex;
  align-items: center;
  width: 27%;
`;

const SlickName = styled.span`
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

const Picture = styled.section``;

const ProductImg = styled.img`
  width: 452px;
  height: 452px;
`;
