import styled from "styled-components"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function CommentsButton({setCommentOpen, commentOpen}){
    

    function handleClick(){
        setCommentOpen(!commentOpen)
    }

    return (
        <Container onClick={handleClick}>
            <IoChatbubbleEllipsesOutline />
            <p>0 comments</p>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 160px;
    left: 10px;
    color: #ffffff;
    text-align: center;
    width: max-content;
    svg {
    font-size: 20px;
    cursor: pointer;
  }
  p {
    font-family: 'Lato';
    position: relative;
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
  }


`