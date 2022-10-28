import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import tag from "../../Services/Tag/tag";
import Context from "../../Context";

export default function Trending() {
  const [trends, setTrends] = useState([]);
  const [user] = useContext(Context);

  useEffect(() => {
    tag(user.token).then((res) => {
      setTrends(res.data);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <Container>
      <h1>trending</h1>
      <div className="divisor"></div>
      <ul>
        {trends.map((e, i) => {
          return (
            <li key={i}>
              <p onClick={() => navigate(`/hashtag/${e.name}`)}># {e.name}</p>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

const Container = styled.main`
  padding-bottom: 1rem;

  height: 100%;

  width: 30.1rem;
  color: #ffffff;
  font-family: "Lato", sans-serif;
  background-color: #171717;
  border-radius: 1.6rem;

  h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;

    font-size: 2.7rem;
    font-weight: bold;
    padding-top: 0.9rem;
    margin: 0rem 0rem 1.2rem 1.6rem;
  }
  .divisor {
    height: 0.1rem;
    width: 30.2rem;
    background-color: #484848;
    margin-bottom: 2.2rem;
  }
  ul {
    margin-left: 1.6rem;
    font-size: 1.9rem;
  }
  li {
    padding-bottom: 0.8rem;
    cursor: pointer;
  }
`;
