import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchContentWithFilter, startGetContent } from "../../actions/content";

const TextPrincipal = styled.h3`
  color: #f7a440;
  font-size: 30px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SearchMore = styled.input`
  background-color: #f7a440;
  height: 45;
  border-radius: 1.5rem;
  line-height: 2rem;
  color: white;
  float: right;
  width:40%;
  ::placeholder{
    color:black;
  }
  &:hover {
    color: black;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default function BtnBuscarMas(resultados) {
  const dispatch = useDispatch()

  const validar= (e) => {
    e.preventDefault()
    if(e.which == 13){
      dispatch(searchContentWithFilter(e.target.value));
    }
  }

  const changeStyle = (e) =>{    
    const item = e.target.style
    item.backgroundColor = "white"
    item.border = "1px solid black"
    item.color = "#f7a440"
  }

  return (
    <div>
      <TextPrincipal style={{ float: "left" }}>
        Cursos principales
      </TextPrincipal>
    <form onSubmit={validar}>      
      <SearchMore className="btn fw-bolder" type="text" placeholder="Buscar Más Temas" name="buscar" onKeyUp={validar} onClick={changeStyle}/>
    </form>
    </div>
  );
}
