import styled from "styled-components"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useState, useContext } from "react";
import axios from "axios";
import Context from "../../Context";
import { API } from "../../Services/API";

export default function CommentsButton({postId, setCommentOpen, commentOpen}){
    console.log(postId)
    const [nComments, setNComments] = useState(0)
    const [user] = useContext(Context);
    
    const id = postId;

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        
        axios.get(`${API}/comment/${id}` , config).then(res =>{
            setNComments(res.data[0].comments)

        }).catch(res=>{
            console.log(res)
        })

    function handleClick(){
        setCommentOpen(!commentOpen)
    }
    
    return (
        <Container onClick={handleClick}>
            <IoChatbubbleEllipsesOutline />
            <p>{nComments} </p>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 5rem;
    left: 1rem;
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