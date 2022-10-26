import { useState, useContext } from "react";
import styled from "styled-components";
import Context from "../Context";
import Topo from "../Components/Header/Topo";
import Posts from "../Components/Posts/Posts";
import Main from '../Components/Main/Main'

export default function Timeline() {
  const [loading, setLoading] = useState("Publish");

  return (
    <>
      <Topo />
      <Main>
        <div>
          <h2>timeline</h2>

          <div className="publish">
            <img src="https://www.rbsdirect.com.br/imagesrc/25287616.jpg?w=1024&h=768&a=c" />
            <div className="inputs">
              <form>
                <p>What are you going to share today?</p>
                <input placeholder="http://..." type="text" />
                <div>
                  <input
                    className="text"
                    type="text"
                    placeholder="Awesome article about #javascript"
                  />
                </div>

                <button>{loading}</button>
              </form>
            </div>
          </div>

          <Posts />
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
        </div>
      </Main>
    </>
  );
}