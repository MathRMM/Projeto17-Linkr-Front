import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactTagify } from "react-tagify";
import styled from "styled-components";
import axios from "axios";
import Trending from "../Trending/Trending";
import Topo from "../Header/Topo";

export default function PostTag() {
  const tagStyle = {
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
  };
  const navigate = useNavigate();
  const { hashtag } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const promise = axios.get(`http://localhost:5000/hashtag/${hashtag}`);

    promise
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
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
                {posts.map((e, indice) => {
                  return (
                    <div className="post" key={indice}>
                      <img src={e.profile} />
                      <div className="colum">
                        <div className="infor">
                          <h3>{e.username}</h3>
                          <p>
                            <ReactTagify
                              tagStyle={tagStyle}
                              tagClicked={(hashtag) =>
                                navigate(`/hashtag/${hashtag.replace("#", "")}`)
                              }
                            >
                              {e.postText}
                            </ReactTagify>
                          </p>
                        </div>

                        <div
                          className="metadado"
                          onClick={() => {
                            window.open(e.link);
                          }}
                        >
                          <div className="postContext">
                            <h1 className="title">{e.title}</h1>
                            <h4 className="description">{e.description}</h4>
                            <p className="link">{e.link}</p>
                          </div>
                          <div className="postImg">
                            <img src={e.image} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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

  .hashtagTitle {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 4.3rem;

    margin: 20.3rem 0rem 5.1rem 0rem;

    color: #ffffff;
  }

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

    img {
      width: 5.3rem;
      height: 5.3rem;

      border-radius: 2.65rem;
    }

    .colum {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      margin-left: 1.7rem;
    }

    .infor {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;

      margin-right: 17rem;

      h3 {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 1.9rem;

        margin-top: 0.5rem;

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
    .metadado {
      display: flex;

      cursor: pointer;
      width: 50.3rem;
      height: 15.5rem;

      border: 0.1rem solid #4d4d4d;
      border-radius: 1.1rem;

      .postContext {
        display: flex;
        flex-direction: column;

        align-items: flex-start;
        justify-content: space-evenly;

        margin-left: 2rem;

        .title {
          font-family: "Lato";
          font-style: normal;
          font-size: 1.6rem;

          color: #cecece;
        }

        .description {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          font-size: 1.1rem;

          color: #9b9595;
        }

        .link {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          line-height: 1.3rem;

          color: #cecece;
        }
      }
      .postImg {
        img {
          height: 15.5rem;
          width: 15.344rem;

          border-radius: 0rem 1.2rem 1.3rem 0rem;

          margin-left: 2rem;
        }
      }
    }
  }
`;
