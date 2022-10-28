import { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";

import Context from "../Context";
import Topo from "../Components/Header/Topo";
import Posts from "../Components/Posts/Posts";
import Main from "../Components/Main/Main";
import NewPost from "../Components/Posts/NewPost";
import { getPostsApi } from "../Services/Posts/post";
import Loading from "../Components/Posts/helpers/Loading";

export default function Timeline() {
  const [user] = useContext(Context);
  const [posts, setPosts] = useState([]);
  const [reload, setReload] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [reloadRender, setReloadRender] = useState(false);

  useEffect(() => {
    getPostsApi(page, user.token).then((e) => {
      if (!posts[0]) {
        setPosts(e.data);
        setHasMore(true);
      }
      if (e.data[0]) {
        posts.push(...e.data);
        setReloadRender(!reloadRender);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    });
  }, [reload]);

  useEffect(() => {
    setPosts(posts);
  }, [reloadRender]);

  function loadMore(e) {
    setPage(e);
    setHasMore(false);
    setReload(!reload);
  }

  return (
    <InfiniteScroll
      pageStart={1}
      loadMore={loadMore}
      useWindow={true}
      initialLoad={false}
      hasMore={hasMore}
      threshold={-50}
    >
      <Main>
        <div>
          <h2>timeline</h2>

          <NewPost user={user} reload={reload} setReload={setReload} />

          {posts?.map((e) => (
            <Posts
              dataPost={e}
              picUrl={e.picUrl}
              username={e.username}
              userId={e.userId}
              key={e.postId}
            />
          ))}
          {hasMore ? <Loading /> : ""}
        </div>
      </Main>
    </InfiniteScroll>
  );
}

const Container = styled.div`
  .screen {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 2.5rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 2.5rem;
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

    img {
      width: 5.3rem;
      height: 5.3rem;

      border-radius: 2.65rem;

      margin-right: 1.7rem;
    }

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

        cursor: pointer;

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

  .NoPosts {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;

    margin-left: 30%;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    .publish {
      margin-left: 8.6rem;

      width: 100%;

      border-radius: 0rem;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        display: none;
      }

      form {
        p {
          font-family: "Lato";
          font-style: normal;
          font-weight: 300;
          font-size: 17px;
          line-height: 20px;
        }

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }

    .global {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;

      h2 {
        margin-left: 12rem;
      }
    }
  }
`;
