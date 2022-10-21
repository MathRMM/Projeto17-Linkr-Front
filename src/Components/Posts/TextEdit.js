import  { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


export default function TextEdit ({text, idPost}){
    const [postText, setPostText] = useState(text)
    const token = 'tokendousuarioa';
    const [enter, setEnter] = useState(false)
    
    function enviarNovaDescricao(){
        console.log("entrou")
        setEnter(true)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.put(`http://localhost:4000/timeline/${idPost}`, {   
            postText
        },config).then(res =>{
            alert('deu certo')
            console.log(res)
            if(res.status === 204){
                console.log(204)
                
            }else{
                alert('Tente Novamente')
            }

        }).catch(res=>{
            console.log(res)
            if(res.response.status === 401) {
                
                alert('Faça login novamente')
            }
            else if(res.response.status === 404){
                
                alert('O post não existe')
            }
            else{
                alert('Não foi possível excluir o post')
            }
             
        })
    }
        
        const textInputRef = useRef(null);
        useEffect(()=>{
            
            textInputRef.current.focus();
            
        }, []); 
        
        
    return (
        <>
            <Imput>
            <form  onSubmit={enviarNovaDescricao}>
            <input  type="text" value = {postText} ref={textInputRef} required
             onChange={e => setPostText(e.target.value)} disabled={enter} />
            
            </form>
            </Imput>

        </>
    )
}

const Imput = styled.div`
    height: auto;
    
    form{
        width: 100%;
        height: 50px;
        input{
            width: 100%;
            height: 6vh;
            color: gray;
            margin-bottom: 1vh;
            border: solid #D4D4D4 1px;
            border-radius: 6px;
            
        }
        input::placeholder{
            color :#D4D4D4;
        }
        textarea:focus, input:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
    
`

