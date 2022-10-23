import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Topo from "../Components/Header/Topo";
import NewPosts from "../Components/Posts/NewPost";
import axios from "axios";
import Context from "../Context";

export default function Timeline() {
  const [loading, setLoading] = useState("Publish");
  const [block, setBlock] = useState(false);
  const [blockButton, setBlockButton] = useState(false);
  const [form, setForm] = useState({
    url: "",
    comment: "",
  });
  const [user, setUser] = useContext(Context);
  const [posts, setPosts] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  setInterval(
    useEffect(() => {
      axios
        .get("http://localhost:5000/timeline", config)
        .then((res) => {
          setPosts(res.data.rows);
        })
        .catch((err) => {
          console.log(err);
          alert(
            "An error occured while trying to fetch the posts, please refresh the page"
          );
        });
    }, [])
  );

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  if (posts.length < 0) {
    alert("There are no posts yet");
  }

  function publish() {
    if (form.url === "") {
      alert("Link vazio");
      return;
    } else {
      const body = { ...form };
      console.log(body);

      axios
        .post("http://localhost:5000/timeline", body, config)
        .then((res) => {
          setBlock(true);
          setBlockButton(true);

          setBlock(false);
          setBlockButton(false);
          setLoading("Publish");
          window.location.reload();
        })
        .catch((err) => {
          setLoading("Publishing...");
          setBlock(true);
          setBlockButton(true);
          alert("Houve um erro ao publicar seu link");

          setBlock(false);
          setBlockButton(false);
          setLoading("Publish");
          console.log(err);
        });
    }
  }

  return (
    <>
      <Topo />
      <Main>
        <div>
          <h2>timeline</h2>

          <div className="publish">
            <img src={user.image} />
            <div className="inputs">
              <form>
                <p>What are you going to share today?</p>
                <input
                  placeholder="http://..."
                  type="text"
                  name="url"
                  onChange={handleForm}
                  value={form.url}
                  disabled={block}
                  required
                />
                <div>
                  <input
                    className="text"
                    type="text"
                    placeholder="Awesome article about #javascript"
                    name="comment"
                    onChange={handleForm}
                    value={form.comment}
                    disabled={block}
                  />
                </div>

                <button disabled={blockButton} onClick={publish}>
                  {loading}
                </button>
              </form>
            </div>
          </div>
          {posts.length > 0 ? (
            <NewPosts posts={posts} />
          ) : (
            <p className="NoPosts">There are no posts yet</p>
          )}
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
`;
