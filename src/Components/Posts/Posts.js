import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import TextEdit from "./TextEdit";
import Context from "../../Context";
import LikesButton from "./LikesButton";
import { getLikes } from "../../Services/Posts/likes";
import { Container } from "./Posts.styles";
import { ReactTagify } from "react-tagify";

export default function Posts({ dataPost, picUrl, username, userId }) {
  const navigate = useNavigate();
  const [likes, setLikes] = useState({});
  const [user] = useContext(Context);
  const [editPost, setEditPost] = useState(false);
  const [text, setText] = useState(dataPost.postText);

  const tagStyle = {
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
  };

  useEffect(() => {
    getLikes(dataPost.postId, user.token)
      .then(e => setLikes(e.data))
      .catch(e => '')
  }, [])

  return (
    <Container>
      <div className="post">
        <div className="top">
          <img src={picUrl} alt="imagem usuario" />
          <div className="infor">
            <h3 onClick={() => navigate(`/user/${userId}`)}>{username} </h3>
            {editPost ? (
              <TextEdit text={text} postId={dataPost.postId} />
            ) : (
              <p>
                <ReactTagify
                  tagStyle={tagStyle}
                  tagClicked={(hashtag) =>
                    navigate(`/hashtag/${hashtag.replace("#", "")}`)
                  }
                >
                  {dataPost.postText}
                </ReactTagify>
              </p>
            )}
          </div>
          {Number(user.id) === Number(userId) ? <div className="editDelete">
            <EditPost editPost={editPost} setEditPost={setEditPost} />
            <DeletePost postId={dataPost.postId} />
          </div> : ''}
        </div>

        <div className="likeComment">
          <LikesButton
            postId={dataPost.postId}
            userLike={likes.userLike}
            likes={likes}
            token={user.token}
          />
        </div>

        <div
          className="dataLink"
          onClick={() => {
            window.open(dataPost.postLink, "_blank");
          }}
        >
          {
            dataPost.metaTitle && dataPost.metaImage ?
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
}
