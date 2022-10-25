import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import TextEdit from "./TextEdit";

import CommentsButton from "./CommentsButton";
import CommentText from "./CommentsText";


import Context from "../../Context";
import LikesButton from "./LikesButton";
import { getLikes } from "../../Services/Posts/likes";


export default function Posts({ username, picUrl, postLink, postText, userId, postId }) {
  const navigate = useNavigate()
  const [likes, setLikes] = useState({})
  const [user] = useContext(Context)
  const [editPost, setEditPost] = useState(false)
  const [text, setText] = useState(postText)
  const [commentOpen, setCommentOpen] = useState(false);


  useEffect(() => {
    getLikes(postId, user.token)
      .then(e => setLikes(e.data))
      .catch(e => '')
  }, [])
  console.log(commentOpen);

  return (
    <Container>
      <div className="post">
        <img src={picUrl} alt='imagem usuario' />
        <LikesButton postId={postId} userLike={likes.userLike} likes={likes} token={user.token} />
       <CommentsButton commentOpen = {commentOpen} setCommentOpen = {setCommentOpen}/>
        <div className="infor">
          <h3 onClick={() => navigate(`/user/${userId}`)}>{username} </h3>
          {editPost ? <TextEdit text={text} postId={postId} /> : <p>{postText}</p>}
        </div>
        <EditPost editPost={editPost} setEditPost={setEditPost} />
        <DeletePost postId={postId} />
        <div className="comments">
          <div>
          <span>teste teste teste</span>
          <span>teste teste teste</span>
          <span>teste teste teste</span>
          <span>teste teste teste</span>  
          <span>teste teste teste</span>
          <span>teste teste teste</span>
          <span>teste teste teste</span>
          <span>teste teste teste</span>
          <span>teste teste teste</span>
          <span>teste teste teste</span>  
          <span>teste teste teste</span>
          <span>teste teste teste</span>
          <span>teste teste teste</span>
          <span>teste teste teste</span>
          <span>teste teste teste</span>
          <span>teste teste teste</span>
          <span>teste teste teste</span>
          <span>teste teste teste</span>
          
          </div>
          <div>
          <CommentText text={text} postId={postId} />
          </div>
        </div>
      </div>
      
      
    </Container>
    
  );
}

const Container = styled.div`
height: auto;
background-color: #1E1E1E;
padding-bottom: 10px;
position: relative;
height: 55.2rem;
box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
border-radius: 1.6rem;
  .post {
    box-sizing: border-box;
    position: relative;
    display: flex;
    padding-top: 1.6rem;
    padding-left: 1.8rem;

    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;

    width: 61.1rem;
    height: 27.6rem;

    margin-bottom: 2.9rem;

    background-color: #171717;
    z-index: 10;

    .infor {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      

      h3 {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 1.9rem;
        cursor: pointer;

        color: #ffffff;
      }

      p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 1.7rem;

        color: #b7b7b7;
      }
      span{
          width: 10%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          div{
            margin-left: 10%;
            
          }
      }
    }
  }
  .comments {
    
    display: flex;
    flex-direction: column;
    padding-top: 1.6rem;
    padding-left: 1.8rem;
    padding-right: 1.8rem;
    font-size: 40px;

    border-radius: 1.6rem;

    width: 61.1rem;
    height: 27.6rem;
    position: absolute;
    
    top: 28rem;
    left: 0;

    margin-bottom: 2.9rem;
    overflow-y: auto;
    

  }
`;
