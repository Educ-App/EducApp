import React from "react";
import styled from "styled-components";

const SearchMore = styled.div`
  background-color: #f7a440;
  width: 40%;
  height: 45;
  border-radius: 1.5rem;
  line-height: 2rem;
  color: white;
  float:right;
  margin-right:5%;
  &:hover {
    color: black;
  }
  @media(max-width:600px){
    width: 100%;
  }
`;

export default function BtnBuscarMas(resultados) {

  return (
    <div>
      {localStorage.getItem("resultados") ? (
        <SearchMore className="btn fw-bolder">Buscar más temas</SearchMore>
      ) : (
        <SearchMore className="btn fw-bolder">Buscar por tema</SearchMore>
      )}
    </div>
  );
}