import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import MY_PAGE_DATA from "./Components/Data/myPageData";
import MyPageList from "./Components/myPageList";
import Header from "../../Components/Header/Header";
import { URL } from "../../Config/Url";

function MyPage() {
  const USER_NAME = localStorage.getItem("user_name");
  const history = useHistory();

  useEffect(() => {
    const URL = window.location.href;
    if (!localStorage.getItem("token")) {
      localStorage.setItem("token", URL.slice(URL.indexOf("=") + 1));
    }
    history.push("/MyPage");
  }, []);

  useEffect(() => {
    fetch(`${URL}/user/activate`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.Authorization) {
          localStorage.setItem("token", result.Authorization);
        }
      });
  }, []);

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <>
      <Header />
      <Main>
        <MainHeader>
          <div>
            <h1>HOI {USER_NAME}</h1>
          </div>
        </MainHeader>
        <Container>
          <Section>
            {MY_PAGE_DATA.map((el, index) => {
              return <MyPageList el={el} key={index} />;
            })}
            <HowToSwap>HOW TO S.W.A.P</HowToSwap>
            <LogoutBtn onClick={logout}>LOGOUT</LogoutBtn>
          </Section>
        </Container>
      </Main>
    </>
  );
}
export default MyPage;

const Main = styled.main`
  padding-top: 100px;
`;

const MainHeader = styled.header`
  display: block;
  height: 110px;
  div {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1170px;

    h1 {
      font-size: 60px;
      line-height: 1.1;
      text-transform: uppercase;
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1170px;
`;

const Section = styled.section`
  width: 65.9574468085%;
  margin-right: -100%;
  margin-left: 0;
  clear: left;
`;

const HowToSwap = styled.span`
  background-color: #adc088;
  font-size: 19px;
  font-weight: 400;
`;

const LogoutBtn = styled.div`
  width: 100px;
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 10px 9px;
  text-align: center;
  font-weight: 500;
  color: white;
  background-color: black;
  cursor: pointer;
`;
