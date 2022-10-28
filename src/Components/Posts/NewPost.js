import { useState } from "react";

import { upPost } from "../../Services/Posts/post";
import Trending from "../Trending/Trending";
import styled from "styled-components";

export default function NewPost({ user, reload, setReload }) {
  const [loading, setLoading] = useState("Publish");
  const [link, setLink] = useState("");
  const [text, setText] = useState("");

  function handleForm(e) {
    e.preventDefault();
    setLoading("Loading...");
    console.log("aa");
    upPost(
      {
        url: link,
        comment: text,
      },
      user.token
    ).then((e) => {
      setReload(!reload);
      setLoading("Publish");
    });
  }

  return (
    <Container>
      <div className="teste">
        <div className="publish">
          <img src={user.image} alt="Imagem do usuario" />
          <div className="inputs">
            <form>
              <p>What are you going to share today?</p>
              <input
                placeholder="http://..."
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <div>
                <input
                  className="text"
                  type="text"
                  placeholder="Awesome article about #javascript"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <button onClick={handleForm}>{loading}</button>
            </form>
          </div>
        </div>
        <Trending />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .teste {
    display: flex;
    gap: 2.5rem;
  }
`;
