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
`;

const Logo = styled.div`
    padding-top: 29rem;
    padding-left: 13rem;
`;

const Titulo = styled.div`
    font-size: 13rem;
    letter-spacing: 0.8rem;
`;

const SubTitle = styled.div`
    font-size: 5rem;
    font-weight: 400;
    width: 28vw;
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