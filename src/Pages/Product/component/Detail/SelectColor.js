import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function SelectColor({ allItem, selected, items, test }) {
  const history = useHistory();

  const handleChange = (e) => {
    history.push(`/product/${e}`);
    window.location.reload();
  };

  console.log("product", selected);

  return (
    <Color>
      <form>
        <ColorLabel htmlFor="">Colors</ColorLabel>
        <div>
          <BorderContainer>
            {items
              .filter((el) => el.seriesName === allItem[0]?.title)
              .map((el, i) => {
                return (
                  <Border className={el.id === selected.id && "selected"}>
                    <ImgColor
                      onClick={() => handleChange(el.id)}
                      src={`https://ifh.cc/g/${el.mainImage.split("-")[1]}`}
                      alt="Product Color"
                    />
                  </Border>
                );
              })}
          </BorderContainer>
        </div>
      </form>
    </Color>
  );
}

export default SelectColor;

const Color = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ColorLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const BorderContainer = styled.div`
  display: flex;
`;

const Border = styled.div`
  width: 45px;
  height: 45px;
  margin: 10px 12px 0 -1px;

  overflow: hidden;
  &.selected {
    box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #b2b2b2;
  }
`;

const ImgColor = styled.img`
  transform: scale(10);
  cursor: pointer;
`;
