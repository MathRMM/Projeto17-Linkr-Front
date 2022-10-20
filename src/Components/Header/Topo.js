import styled from "styled-components";
import imgPerfil from "../imgs/foto_de_perfil.svg";
import SearchBar from "../searchBar/Search";

export default function Topo() {
  return (
    <Header>
      <h1>linkr</h1>
      <SearchBar/>
      <div>
        <img src="https://www.rbsdirect.com.br/imagesrc/25287616.jpg?w=1024&h=768&a=c" />
      </div>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;

  width: 100%;
  height: 7.2rem;

  top: 0;
  right: 0;

  background-color: #151515;

  h1 {
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 4.9rem;

    margin-left: 2.8rem;

    color: #ffffff;
  }

  img {
    width: 5.3rem;
    height: 5.3rem;

    border-radius: 2.65rem;

    margin-right: 1.7rem;
  }
`;
