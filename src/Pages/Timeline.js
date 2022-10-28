import { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";

import Context from "../Context";
import Posts from "../Components/Posts/Posts";
import Main from "../Components/Main/Main";
import NewPost from "../Components/Posts/NewPost";
import { getPostsApi } from "../Services/Posts/post";
import Loading from "../Components/Posts/helpers/Loading";
import CountPosts from "../Components/Posts/helpers/CountPosts";

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

  console.log(posts);

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
          <CountPosts
            user={user}
            reload={reload}
            setReload={setReload}
            page={page}
            setPage={setPage}
            posts={posts}
            setPosts={setPosts}
          />

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
