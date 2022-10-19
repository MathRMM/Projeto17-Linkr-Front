import { useState, useContext } from "react";
import styled from "styled-components";
import Context from "../Context";
import header from "../Components/Header/Topo";
import Topo from "../Components/Header/Topo";

export default function Timeline() {
  return (
    <>
      <Topo />
      <Main>
        <div>
          <h2>timeline</h2>

          <div className="publish">
            <img src="https://www.rbsdirect.com.br/imagesrc/25287616.jpg?w=1024&h=768&a=c" />
            <div className="inputs">
              <div>
                <p>What are you going to share today?</p>
                <input placeholder="http://..." type="text" />
                <input
                  className="text"
                  type="text"
                  placeholder="Awesome article about #javascript"
                />
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  margin-top: 10rem;

  h2 {
    margin-top: 15rem;
    margin-bottom: 4.3rem;

    display: flex;
    align-items: initial;

    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 4.3rem;

    color: #ffffff;
  }

  .publish {
    display: flex;
    padding-top: 1.6rem;
    padding-left: 1.8rem;

    .inputs {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 0.5rem;

      input {
        width: 50.3rem;
        height: 3rem;

        border: none;
        background: #efefef;
        border-radius: 0.5rem;
      }

      .text {
        margin: 0.5rem 0rem;

        width: 50.2rem;
        height: 6.6rem;

        background: #efefef;
        border-radius: 0.5rem;
      }
    }

    width: 61.1rem;
    height: 20.9rem;

    background-color: #ffffff;
  }

  img {
    width: 5.3rem;
    height: 5.3rem;

    border-radius: 2.65rem;

    margin-right: 1.7rem;
  }
`;
