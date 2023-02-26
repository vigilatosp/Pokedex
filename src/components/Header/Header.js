import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import {
  ButtonDelet,
  ButtonPokedex,
  ButtonPokemon,
  Container,
  ButtonAdd,
} from "./styled";
import logo from "../../img/pokemon-logo.jpeg";
import ModalCard from "../Modal/ModalCard";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = (props) => {

  const location = useLocation();

  const navigate = useNavigate();
  const params = useParams();

  const context = useContext(GlobalContext);

  const {
    pageNumber,
    pokedex,
    addToPokedex,
    removeToPokedex,
    setIsOpen,
    setFlow,
  } = context;

  useEffect(() => {
    renderHeader();
  }, []);

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Container>
            <div>
              <img src={logo} />
            </div>
            <ButtonPokedex>
              <button onClick={() => goToPokedexPage(navigate)}>Pokedex </button>
            </ButtonPokedex>
          </Container>
        );
      case `/page/${pageNumber}`:
        return (
          <Container>
            <div>
              <img src={logo} />
            </div>
            <ButtonPokedex>
              <button onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
            </ButtonPokedex>
          </Container>
        );
      case "/pokedex":
        return (
          <Container>
            <ButtonPokemon>
              <button onClick={() => goToHomePage(navigate)}>
                Todos Pokémons
              </button>
            </ButtonPokemon>
            <img src={logo} />
          </Container>
        );
      case `/detail/${params.pokemonName}`:
        return (
          <Container>
            <ButtonPokemon>
              <button onClick={() => goToHomePage(navigate)}>
                Todos Pokémons
              </button>
            </ButtonPokemon>
            <img src={logo} />
            {pokedex.find((pokemon) => pokemon.name === params.pokemonName) ? (
              <ButtonDelet>
                <button
                  onClick={() => {
                    setFlow(2);
                    setIsOpen(true);
                    removeToPokedex(props.pokemon);
                  }}
                >
                  Excluir da Pokédex
                </button>
              </ButtonDelet>
            ) : (
              <ButtonAdd>
                <button
                  onClick={() => {
                    setFlow(1);
                    setIsOpen(true);
                    addToPokedex(props.pokemon);
                  }}
                >
                  Adicionar da Pokédex
                </button>
              </ButtonAdd>
            )}
          </Container>
        );
    }
  };

  return (
    <Container>
      {renderHeader()}
      <ModalCard />
    </Container>
  );
};

export default Header;
