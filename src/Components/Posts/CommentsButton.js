import styled from "styled-components"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Context from "../../Context";
import { API } from "../../Services/API";

export default function CommentsButton({setComments, postId, setCommentOpen, commentOpen}){
    
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

    function HandleClick(){

    const id = postId;

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }
    
        axios.get(`${API}/comments/${id}` , config).then(res =>{
            
             setComments(res.data) 
    
        }).catch(res=>{
            console.log(res)
        }) 
    
      
    
        setCommentOpen(!commentOpen)
    }
    
    return (
        <Container onClick={HandleClick}>
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