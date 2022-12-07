import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Trending from "../Trending/Trending";
import Topo from "../Header/Topo";
import Context from "../../Context";
import Posts from "./Posts";
import { getTagByName } from "../../Services/Tag/tag";

export default function PostTag() {
  const { hashtag } = useParams();
  const [posts, setPosts] = useState([]);
  const [user] = useContext(Context);

  useEffect(() => {
    getTagByName(hashtag, user.token)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [hashtag]);

  console.log(posts);

  return (
    <>
      <Topo />

      <Container>
        <div>
          <h1 className="hashtagTitle"># {hashtag}</h1>
          <div className="screen">
            <div>
              <ul>
                {posts.map((e) => (
                  <Posts
                    dataPost={e}
                    picUrl={e.picUrl}
                    username={e.username}
                    userId={e.userId}
                  />
                ))}
              </ul>
            </div>
            <Trending />
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 2.5rem;

  .screen {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
  }

  .top {
    gap: 2rem;
  }

  .hashtagTitle {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 4.3rem;

    margin: 20.3rem 0rem 5.1rem 0rem;

    color: #ffffff;
  }
`;
