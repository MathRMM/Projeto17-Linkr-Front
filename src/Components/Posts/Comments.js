import styled from "styled-components";



const comment = [
    
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
    {
        id: 1,
        img: "https://helsinkisailing.com/wp-content/uploads/2020/01/profile-pic.png",
        name: "João Avatares",
        text: "Adorei esse post, ajuda muito a usar Material UI com React!", 
        following: true,
        AutorPost: false,
    },

]
export default function Comments ({comments}){
    return(
        <Container>
            {comments.length>0?
            comments.map(v => {
                    if (v) {
                        return (
                        <>
                            <div>
                                <span><img src={v.picUrl}/></span>
                                <div>
                                    <div>
                                        <h2>{v.username}</h2>
                                        {
                                            v.isPostAuthor? <h3>• post’s author</h3> :
                                            v.following? <h3>• following</h3> :<></>
                                        }
                                        </div>
                                    <p>{v.commentary}</p>
                                </div>
                            </div>
                            <hr></hr>
                        </>
                        )
                    } else return
                }):<></>}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: auto;
    div{
    display: flex;
    width: 100%;
    height: 8rem;
    padding: 10px 0;
    
    div{
        width: auto;
        height: 100%;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
    p{
        font-size: 12px;
        font-family: 'Lato';
        font-weight: 400;
        color: #ACACAC;
    }
    div{
        width: auto;
        height: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin: 0;
        padding: 0;

        h2{
        font-size: 14px;
        font-family: 'Lato';
        font-weight: 700;
        color: #F3F3F3;
        margin: 0;
        width: auto;
        
        }
        h3{
            font-size: 14px;
            font-family: 'Lato';
            font-weight: 400;
            color: #565656;
            margin: 0 0 0 10px;
            width: auto;
        }
    }
    }
   
    }
    
    hr {
    width: 100%;
	  border: 0;
	  border-top: 0.15rem solid #353535;
      margin: 0;
      margin-bottom: 1rem;
  }
`