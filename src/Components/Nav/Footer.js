import React from "react";
import styled from "styled-components";
import { AlternateEmail } from "@styled-icons/material/AlternateEmail";
import { Instagram, Facebook } from "@styled-icons/boxicons-logos";

export default function Footer() {
  return (
    <FooterIcons>
      <div>
        <span>
          <AlternateEmail size="24" />
        </span>
        <span>
          <Instagram size="26" />
        </span>
        <span>
          <Facebook size="26" />
        </span>
      </div>
      <span className="copyright">© FREITAG 2020</span>
    </FooterIcons>
  );
}

const FooterIcons = styled.footer`
  ${({ theme }) => theme.flex("space-between", "center", "")}
  position: relative;
  width: 300px;

  div {
    padding: 15px;

    span {
      margin-right: 27px;
    }
  }

  span.copyright {
    position: absolute;
    right: 15px;
    font-size: 13px;
    font-weight: 700;
  }
`;
