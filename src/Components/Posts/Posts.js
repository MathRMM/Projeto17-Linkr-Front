import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import TextEdit from "./TextEdit";

export default function Posts({
  username,
  picUrl,
  postLink,
  postText,
  userId,
}) {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="post">
        <img src={picUrl} alt="imagem usuario" />
        <div className="infor">
          <h3 onClick={() => navigate(`/user/${userId}`)}>{username} </h3>
          <p>{postText}</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .post {
    position: relative;
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
        cursor: pointer;
        color: #ffffff;
      }
      p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 1.7rem;
        color: #b7b7b7;
      }
      span {
        width: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          margin-left: 10%;
        }
      }
    }
  }
`;
