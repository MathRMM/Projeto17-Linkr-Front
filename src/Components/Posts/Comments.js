import styled from "styled-components"


const comments = [
    {
        id: 1,
        img: "https://helsinkisailing.com/wp-content/uploads/2020/01/profile-pic.png",
        name: "João Avatares",
        text: "Adorei esse post, ajuda muito a usar Material UI com React!", 
        following: true,
        AutorPost: false,
    },
    {   
        id: 2,
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
        name: "Juvenal Juvêncio",
        text: "Também achei, mudou minha vida", 
        following: false,
        AutorPost: true
    },
    {   
        id: 3,
        img: "https://static.vecteezy.com/ti/vetor-gratis/p1/2387693-icone-do-perfil-do-usuario-gr%C3%A1tis-vetor.jpg",
        name: "João Amongus",
        text: "Gostei não.", 
        following: false,
        AutorPost: false
    },

]
export default function Comments (){
    return(
        <Container>
            {comments?.map(v => {
                    if (v) {
                        return (
                            <div>
                                <img src={v.img}/>
                                <h2>{v.name}</h2>
                                <p>{v.text}</p>
                                {/* {v.img}
                                {v.img} */}
                                <hr></hr>
                            </div>
                        )
                    } else return
                })}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: red;
    div{
        display: flex;
    width: 100%;
    height: 10rem;
    background-color: blue;
    margin-bottom: 1rem;
    h2{
        font-size: 19px;
        margin: 0;
    }
    p{
        font-size: 12px;
    }
    }
    
    hr {
    width: 100%;
	  border: 0;
	  border-top: 0.15rem solid #353535;
  }
`