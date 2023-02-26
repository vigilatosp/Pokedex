import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  border: 2px solid white;
  display: flex;
  height: 15vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  img {
    width: 400px;
    height: 120px;
  }
`;

export const ButtonPokemon = styled.div`
  button {
    border: none;
    background: none;
    color: white;
    text-decoration: underline;
    font-size: 2rem;
    font-size: "Poppins";
    font-weight: 700;
    cursor: pointer;
  }
  position: absolute;
  left: 7vw;
`;

export const ButtonPokedex = styled.div`
  position: absolute;
  right: 5vw;
  button {
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 13vw;
    height: 6vh;
    background-color: white;
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: black;
    font-size: 2rem;
    border: none;
    cursor: pointer;
  }
`;

export const ButtonDelet = styled.div`
  position: absolute;
  right: 7vw;
  button {
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 11.7vw;
    height: 5.8vh;
    background-color: #FF6262;
    border-radius: 8px;
    font-family: sans-serif;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

export const ButtonAdd = styled.div`
  position: absolute;
  right: 7vw;
  button {
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 11.7vw;
    height: 5.8vh;
    background-color: #33a4f5;;
    border-radius: 8px;
    font-family: sans-serif;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;
