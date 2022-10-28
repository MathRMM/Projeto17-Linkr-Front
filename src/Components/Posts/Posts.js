import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import TextEdit from "./TextEdit";
<<<<<<< HEAD

export default function Posts({
  username,
  picUrl,
  postLink,
  postText,
  userId,
}) {
  const navigate = useNavigate();
=======
import Context from "../../Context";
import LikesButton from "./LikesButton";
import { getLikes } from "../../Services/Posts/likes";
import { Container } from "./Posts.styles";


export default function Posts({ dataPost, picUrl, username, userId }) {
  const navigate = useNavigate();
  const [likes, setLikes] = useState({});
  const [user] = useContext(Context);
  const [editPost, setEditPost] = useState(false);
  const [text, setText] = useState(dataPost.postText);

  useEffect(() => {
    getLikes(dataPost.postId, user.token)
      .then(e => setLikes(e.data))
      .catch(e => '')

  }, [])

  console.log(user)
>>>>>>> main

  return (
    <Container>
      <div className="post">
<<<<<<< HEAD
        <img src={picUrl} alt="imagem usuario" />
        <div className="infor">
          <h3 onClick={() => navigate(`/user/${userId}`)}>{username} </h3>
          <p>{postText}</p>
=======
        <div className="top">
          <img src={picUrl} alt='imagem usuario' />
          <div className="infor">
            <h3 onClick={() => navigate(`/user/${userId}`)}>{username} </h3>
            {editPost ? <TextEdit text={text} postId={dataPost.postId} /> : <p>{dataPost.postText}</p>}
          </div>
          {user.id === userId ? <div className="editDelete">
            <EditPost editPost={editPost} setEditPost={setEditPost} />
            <DeletePost postId={dataPost.postId} />
          </div> : ''}
>>>>>>> main
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
              </>) : (
                <div className="onlyLink">{dataPost.postLink}</div>
              )
          }
        </div>

      </div>
    </Container>
  );
<<<<<<< HEAD
}

const Container = styled.div`
  .post {
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
      span {
        width: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          margin-left: 10%;
        }
      }
    }
  }
`;
=======
}
>>>>>>> main
