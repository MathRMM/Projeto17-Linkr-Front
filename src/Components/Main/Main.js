import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import { useState, useEffect } from 'react';

import Topo from "../Header/Topo"

export default function Main({ children }) {
  const [posts, setPosts] = useState([])
  const [reloadRender, setReloadRender] = useState(false)


  useEffect(() => {
    setPosts(posts)
  }, [reloadRender])

  return (
    <>
      <Topo />
      <MainComponent
        posts={posts}
        setPosts={setPosts}
        reloadRender={reloadRender}
        setReloadRender={setReloadRender}
      >
        {children}
      </MainComponent>
    </>
  )
}

const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  position: relative;

  width: 80%;
  h2 {
    width: 60rem;
    margin-top: 15rem;
    margin-bottom: 4.3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 4.3rem;

    color: #ffffff;
  }

  h2 span {
    display: flex;
    align-items: center;
  }

  h2 span img {
    margin-left: 1.7rem;
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

        color: #ffffff;

        width: 11.2rem;
        height: 3.1rem;

        background: #1877f2;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
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
