import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getLinkPreview } from 'link-preview-js'

import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import TextEdit from "./TextEdit";
import Context from "../../Context";
import LikesButton from "./LikesButton";
import { getLikes } from "../../Services/Posts/likes";



export default function Posts({ dataPost, picUrl, username, userId }) {
  const navigate = useNavigate();
  const [likes, setLikes] = useState({});
  const [user] = useContext(Context);
  const [editPost, setEditPost] = useState(false);
  const [text, setText] = useState(dataPost.postText);
  const [metaData, setMetadata] = useState([]);

  useEffect(() => {
    getLikes(dataPost.postId, user.token)
      .then(e => setLikes(e.data))
      .catch(e => '')

    getLinkPreview(dataPost.postLink)
      .then(e => console.log(e))
      .catch(e => console.log(e.response))
  }, [])

  return (
    <Container>
      <div className="post">
        <div className="top">
          <img src={picUrl} alt='imagem usuario' />
          <div className="infor">
            <h3 onClick={() => navigate(`/user/${userId}`)}>{username} </h3>
            {editPost ? <TextEdit text={text} postId={dataPost.postId} /> : <p>{dataPost.postText}</p>}
          </div>
          <div className="editDelete">
            <EditPost editPost={editPost} setEditPost={setEditPost} />
            <DeletePost postId={dataPost.postId} />
          </div>
        </div>

        <div className="likeComment">
          <LikesButton postId={dataPost.postId} userLike={likes.userLike} likes={likes} token={user.token} />
        </div>

        <div
          className="dataLink"
          onClick={() => {
            window.open(dataPost.postLink, '_blank');
          }}
        >
          {
            dataPost.metaTitle ?
              (<>
                <div className="postContext">
                  <h1 className="title">{dataPost.metaTitle}</h1>
                  <h4 className="description">{dataPost.metaDescription}</h4>
                  <p className="link">{dataPost.postLink}</p>
                </div>
                <div className="postImg">
                  <img src={dataPost.metaImage} alt="" />
                </div>
              </>):(
                <div className="onlyLink">{dataPost.postLink}</div>
              )
          }
        </div>

      </div>
    </Container>
  );
}

const Container = styled.div`
  .post {
    width: 61.1rem;
    height: 100%;
    position: relative;
    margin-bottom: 2.9rem;
    padding: 1.6rem 1.8rem 2rem 1.8rem;

    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;
   
    background-color: #171717;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;

    .top{
      display: flex;
      position: relative;
    }

    .infor {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;

      h3 {
        font-size: 1.9rem;
        cursor: pointer;

        color: #ffffff;
      }

      p {
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

    .editDelete{
      display: flex;
      gap: 8px;
      position: absolute;
      right: 0;
    }

    .likeComment{
      position: absolute;
      top: 90px;
      left: 2.3rem;
      color: #ffffff;
      text-align: center;
      width: max-content;
    }

    .dataLink {
      width: 50.3rem;
      height: 100%;
      cursor: pointer;
      border: 0.1rem solid #4d4d4d;
      border-radius: 1.1rem;
      margin-left: 7rem;
      display: flex;
      justify-content: space-between;
      
      .postContext {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        margin-left: 2rem;
        
        .title {
          font-size: 1.6rem;
          color: #cecece;
        }
        
        .description {
          font-size: 1.1rem;
          color: #9b9595;
        }
        
        .link {
          line-height: 1.3rem;
          color: #cecece;
        }
      }

      .postImg img{
          height: 15.5rem;
          width: 15.4rem;
          border-radius: 0rem 1rem 1rem 0rem;
          margin: 0 0 0 2rem;
          object-fit: cover;
          object-position: center;
      }

      .onlyLink{
          font-size: 20px;
          line-height: 150%;
          color: blue;
          margin-left: 1rem;
        }
    }
  }
`;
