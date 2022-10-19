import { useState, useContext } from "react";
import styled from "styled-components";

export default function Posts() {
  return (
    <Container>
      <div className="post">
        <img src="https://www.rbsdirect.com.br/imagesrc/25287616.jpg?w=1024&h=768&a=c" />
        <div className="infor">
          <h3>Juvenal Juvêncio </h3>
          <p>
            Muito maneiro esse tutorial de Material UI com React, deem uma
            olhada!
          </p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .post {
    display: flex;
    padding-top: 1.6rem;
    padding-left: 1.8rem;

    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;

    width: 61.1rem;
    height: 27.6rem;

    margin-bottom: 2.9rem;

    background-color: #171717;

    .infor {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;

      h3 {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 1.9rem;

        color: #ffffff;
      }

      p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 1.7rem;

        color: #b7b7b7;
      }
    }
  }
`;
