import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid white;
  display: flex;
  width: 100vw;
  color: white;
  background-color: black;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  width: 96%;
  img {
    width: 40px;
    height: 40px;
    @media (max-width: 800px) {
    width: 40px;
    height: 40px;
    }
  }
  a {
    img {
      transition: all 0.5s;
    }
  }
  div {
    padding: 6px;
    display: flex;
    justify-content: center;
    gap: 15px;
    @media (max-width: 800px) {
      padding: 0px;
  }
  }
  h1 {
    font-size: 20px;
  }
`;