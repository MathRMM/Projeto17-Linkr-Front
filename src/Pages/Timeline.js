import { useState, useContext, useEffect} from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";

import Context from "../Context";
import Posts from "../Components/Posts/Posts";
import Main from "../Components/Main/Main";
import NewPost from "../Components/NewPosts/NewPost";
import { getPostsApi } from "../Services/Posts/post";
import { getAllFollowing } from "../Services/Following/follow";
import Loading from '../Components/Posts/helpers/Loading';
import CountPosts from "../Components/Posts/helpers/CountPosts";
import Trending from '../Components/Trending/Trending';


export default function Timeline() {
  const [user] = useContext(Context)
  const [posts, setPosts] = useState([])
  const [reload, setReload] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const [reloadRender, setReloadRender] = useState(false)
  const [message, setMessage] = useState('');


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

  useEffect(() => {
    getAllFollowing(user.token)
      .then(res => {
        if (res.data.length === 0) {
          setMessage(current => "You don't follow anyone yet. Search for new friends!");
        } else if (posts.length === 0) {
          setMessage(current => "No posts found from your friends :(");
        }
      }).catch(e => {
          return
      })
  })


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
        <div >
          <h2>timeline</h2>

          <NewPost
            user={user}
            reload={reload}
            setReload={setReload}
            setPage={setPage}
            setPosts={setPosts}
          />

          <CountPosts
            user={user}
            reload={reload}
            setReload={setReload}
            setPage={setPage}
            posts={posts}
            setPosts={setPosts}
          />

          {posts.length !== 0 ? posts.map(e => <Posts
            dataPost={e}
            picUrl={e.picUrl}
            username={e.username}
            userId={e.userId}
            key={e.postId}
          />) : <Message>{message}</Message>}
          {hasMore ? <Loading /> : ''}
        </div>
        <Trending/>
      </Main>
    </InfiniteScroll>
  );
}

const Message = styled.div`
  color: white;
  font-size: 2rem;
  width: 100%;
  text-align: center;
  padding-top: 2rem;
`
