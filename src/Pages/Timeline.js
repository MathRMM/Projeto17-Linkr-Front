import { useState, useContext } from "react";
import styled from "styled-components";
import Context from "../Context";
import Topo from "../Components/Header/Topo";
import Posts from "../Components/Posts/Posts";

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

    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;

    width: 61.1rem;
    height: 20.9rem;

    margin-bottom: 2.9rem;

    background-color: #ffffff;

    .inputs {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 0.5rem;

      input {
        width: 50.3rem;
        height: 3rem;

        padding: 1rem;

        border: none;
        background: #efefef;
        border-radius: 0.5rem;

        outline: none;
      }

      input::placeholder {
        padding-left: 0.1rem;
      }

      div {
        margin: 0.5rem 0rem;

        width: 50.2rem;
        height: 6.6rem;

        background: #efefef;
        border-radius: 0.5rem;
      }

      p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 300;
        font-size: 2rem;
        line-height: 2.4rem;

        margin-bottom: 1rem;

        color: #707070;
      }

      .text {
        width: 50.2rem;
        word-wrap: break-word;
      }

      button {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 1.4rem;

        margin-left: 39rem;

        border: none;

        color: #ffffff;

        width: 11.2rem;
        height: 3.1rem;

        background: #1877f2;
        border-radius: 0.5rem;
      }
    }
  }

  img {
    width: 5.3rem;
    height: 5.3rem;

    border-radius: 2.65rem;

    margin-right: 1.7rem;
  }
`;
