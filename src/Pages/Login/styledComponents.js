import styled from "styled-components";

// TODO - media querys
// 900px - 1200px: corrigir proporção entre form e a logo (60%/40%)
// 700px - 900px: corrigir proporção entre form e a logo (50%/50%)
// < 700px: mudar layout mobile
const LogoContainer = styled.div`
    background-color: black;
    color: white;
    width: 70vw;
    height: 100vh;

    @media (max-width: 1200px) and (min-width: 900px) {
        width: 60vw;
    }
    
    @media (max-width: 900px) and (min-width: 800px) {
        width: 50vw;
    }
    
    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        width: 100%;
        height: 30vh;
    }
`;

const Logo = styled.div`
    padding-top: 29rem;
    padding-left: 13rem;
    
    @media (max-width: 800px){
        padding-top: 2rem;
        padding-left: 2rem;
    }
`;

const Titulo = styled.div`
    font-size: 13rem;
    letter-spacing: 0.8rem;
    
    @media (max-width: 1200px) and (min-width: 900px) {
        font-size: 11rem;
    }
    
    @media (max-width: 900px) and (min-width: 800px) {
        font-size: 9.5rem;
    }
    
    @media (max-width: 800px) {
        font-size: 9rem;
        text-align: center;
    }
    
    @media (max-width: 500px){
        font-size: 7rem;
    }
`;

const SubTitle = styled.div`
    font-size: 5rem;
    font-weight: 400;
    width: 28vw;
    
    @media (max-width: 1200px) and (min-width: 900px) {
        font-size: 4.3rem;
    }
    
    @media (max-width: 900px) and (min-width: 800px) {
        font-size: 3rem;
    }

    @media (max-width: 800px) {
        font-size: 3.5rem;
        width: 65vw;
        text-align: center;
    }

    @media (max-width: 500px){
        font-size: 2.6rem;
    }
`;

const Body = styled.div`
    position: relative;
`;

const FormWrapper = styled.div`
    position: absolute;
    width: 29.7vw; 
    right: 0;
    top: 0;
    margin-top: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    form {
        width: 80%;
    }
    
    input {
        font-family: 'Oswald', sans-serif;
        font-weight: 500;
        font-size: 2.3rem;
        width: 100%;
        color: rgba(0, 0, 0, 0.7);
        height: 5rem;
        border-radius: 7px;
        border: none;
        margin-bottom: 1rem; 
        padding: 1rem;
    }
    
    @media (max-width: 1200px) and (min-width: 900px) {
        width: 39.7vw; 
    }
    
    @media (max-width: 900px) and (min-width: 800px) {
        width: 49.7vw; 
    }

    @media (max-width: 800px) {
        position: static;
        width: 100%;
        margin-top: 5rem;

    }

    @media (max-width: 500px){
        form {
            width: 90%;
        }
    }

    `;

const SubmitButton = styled.button.attrs({ type: 'submit' })`
    width: 100%;
    border: none;
    border-radius: 7px;
    height: 5rem;
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    font-size: 2.3rem;
    color: white;
    background-color: #1877F2;
    cursor: pointer;
`

const LinkWrapper = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: center;

    a {
        font-family: 'Lato', sans-serif;
        color: white;
        font-size: 1.8rem;
    }
`

export {
    LogoContainer,
    Logo,
    Titulo,
    SubTitle,
    Body,
    FormWrapper,
    SubmitButton,
    LinkWrapper
}