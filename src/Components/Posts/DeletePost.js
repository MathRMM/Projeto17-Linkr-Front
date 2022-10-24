import axios from "axios";
import { useState } from "react";
import { API } from "../../Services/API";

import Modal from "react-modal";
import "./styles.css"

import { ThreeDots } from  'react-loader-spinner'

Modal.setAppElement("#root");

export default function DeletePost({idPost}){
        
    const [habilitado, setHabilitado] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const token = 'tokendousuario';

        function toggleModal() {
            
          setIsOpen(!isOpen);
        }

        function toggleModalAndDelete() {
            setHabilitado(true)
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            axios.delete(`${API}/timeline/${idPost}` , config
        ).then(res =>{
            if(res.status === 204){
                setIsOpen(!isOpen);
                setHabilitado(false)
            }else{
                alert('Tente Novamente')
            }

        }).catch(res=>{
            
                alert('Não foi possível excluir o post')
            
             setIsOpen(!isOpen);
             setHabilitado(false)
        }) 
    }
    
    return (
        <>
       <div className="App">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleModal}>
            <path d="M13.4167 2.52H11.0833V1.12C11.0833 0.50225 10.5602 0 9.91667 0H4.08333C3.43984 0 2.91667 0.50225 2.91667 1.12V2.52H0.583333C0.260677 2.52 0 2.77025 0 3.08V3.64C0 3.717 0.065625 3.78 0.145833 3.78H1.24687L1.69714 12.9325C1.7263 13.5293 2.24036 14 2.86198 14H11.138C11.7615 14 12.2737 13.531 12.3029 12.9325L12.7531 3.78H13.8542C13.9344 3.78 14 3.717 14 3.64V3.08C14 2.77025 13.7393 2.52 13.4167 2.52ZM9.77083 2.52H4.22917V1.26H9.77083V2.52Z" fill="white"/>
        </svg>
        <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
        >
        <div>
            <h3>Are you sure you want
            to delete this post?</h3>
            <div>
            <button onClick={toggleModal}>No, go back</button>
            <button onClick={toggleModalAndDelete}>
                {!habilitado ?<h2>Yes, delete it</h2> : <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#FFFFFF" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                />}
                
                </button>
            </div>
        </div>
        
        </Modal>
        </div> 
           
        </>
    );
}





