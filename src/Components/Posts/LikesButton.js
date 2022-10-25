import { FaRegHeart, FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Tooltip from 'react-tooltip'

import { postLikes } from "../../Services/Posts/likes";

export default function LikesButton({ postId, likes, token, userLike }) {
  const [liked, setLiked] = useState(false);
  const [countLikes, setCountLikes] = useState(0)

  useEffect(() => {
    setLiked(userLike)
    setCountLikes(Number(likes?.countLikes) || 0)
  }, [userLike])

  function handleClick(e) {
    postLikes(postId, token)
      .then(e => {
        if (e.data?.message === 'LIKE') {
          setLiked(true)
          setCountLikes(countLikes + 1)
        }
        if (e.data?.message === 'UNLIKE') {
          setLiked(false)
          setCountLikes(countLikes - 1)
        }
      })
  }

  function whoLiked() {
    const profiles = likes?.likes || []
    if (liked) {
      if (!profiles[0]) {
        return ('Você')
      } else {
        return ('Você and ' + profiles[0].username + ' and other ' + (countLikes - 2))
      }
    } else {
      if (!profiles[0]) {
        return ('Seja o primerio a curtir')
      }
      if (profiles.length === 1) {
        return (profiles[0]?.username)
      }
      if (profiles.length >= 2) {
        return (profiles[0].username + ', ' + profiles[1].username + ' and other ' + (countLikes - 2))
      }
    }
  }

  return (
    <Container>
      {liked ? (
        <FaHeart onClick={() => handleClick(false)} color="#AC0000" />
      ) : (
        <FaRegHeart onClick={() => handleClick(true)} color="#ffffff" />
      )}
      <p data-tip={whoLiked()}>{(countLikes) + ' Likes'}</p>
      <Tooltip Effect = 'solid' type="light" place = 'bottom'/>
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
    font-family: 'Lato';
    position: relative;
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
  }
`;
