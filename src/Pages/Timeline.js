import { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import Context from "../Context";
import Topo from "../Components/Header/Topo";
import Posts from "../Components/Posts/Posts";
import Main from '../Components/Main/Main'
import { postsApi } from "../Services/Posts/post";

export default function Timeline() {
  const [loading, setLoading] = useState("Publish");
  const [posts, setPosts] = useState([])
  const [user] = useContext(Context)

  useEffect(() => {
    postsApi(user.token)
      .then(e => setPosts(e.data))
  }, [])

  console.log(user)

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

          {posts?.map(e => <Posts
            dataPost={e}
            picUrl={e.picUrl}
            username={e.username}
            userId={e.userId}
            key={e.postId}
          />)}
        </div>
      </Main>
    </>
  );
}