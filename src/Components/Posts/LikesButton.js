import { FaRegHeart, FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { postLikes } from "../../Services/Posts/likes";

export default function LikesButton({ postId, likes, token, userLike }) {
    const [liked, setLiked] = useState(false);
    const [countLikes, setCountLikes] = useState(0)

    useEffect(()=>{
      setLiked(userLike)
      setCountLikes(likes?.countLikes || 0)
    },[userLike])
    console.log(userLike)
    /* console.log(token) */

    function handleClick(e) { 
      postLikes(postId, token)
      .then(e => {
        if(e.data?.message === 'LIKE'){
          setLiked(true)
          setCountLikes(countLikes + 1)
        }
        if(e.data?.message === 'UNLIKE'){
          setLiked(false)
          setCountLikes(countLikes - 1)
        }
      })
    }

    return (
        <Container>
            {liked ? (
                <FaHeart onClick={()=>handleClick (false)} color="#AC0000" />
            ) : (
                <FaRegHeart onClick={()=>handleClick(true)} color="#ffffff" />
            )}
            <p>{(countLikes) + ' Likes'}</p>
        </Container>
    );
}

const Container = styled.div`
  position: absolute;
  top: 90px;
  left: 10px;
  color: #ffffff;
  text-align: center;
  width: max-content;

  svg {
    font-size: 20px;
    cursor: pointer;
    color: ${(props) => props.color};
  }

  p {
    font-family: Loto;
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
  }
`;
