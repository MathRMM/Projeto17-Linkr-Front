import Timeline from "../../Pages/Timeline";
import Modal from "react-modal";
import Button from "react-modal"
import { useState } from "react";

export default function ModalTimeline(){
     const idPost = sessionStorage.getItem('idPost');
    
    alert(idPost)
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
        <Timeline/>
        </>
    )
}