import { useState, useEffect, useContext } from "react";
import { useProfile } from "../../Services/useProfile";
import { Link, useNavigate } from "react-router-dom";

import { postSignUp } from "../../Services/SignIn-SignUp/login";

import Context from "../../Context";

import { LogoContainer, Logo, Titulo, SubTitle, Body, FormWrapper, SubmitButton, LinkWrapper } from "./styledComponents";


export function SignUp() { // TODO - criar uma rota q verifica se o usuário está com session aberta >> redireciona para a timeline (ou retorna para a página anterior)
    const [isLoading, setIsLoading] = useState(false);
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [usernameRegister, setUsernameRegister] = useState('');
    const [urlRegister, setUrlRegister] = useState('');

    const navigate = useNavigate();

    const [user, setUser] = useContext(Context);
    const checkSession = useProfile(user, setUser);

    useEffect(checkSession, []);

    function handleLogin(e) {
        if (isLoading) return;
        e.preventDefault();

        setIsLoading(current => true);

        const body = {
            email: emailRegister,
            password: passwordRegister,
            username: usernameRegister,
            picUrl: urlRegister,
        }

        postSignUp(body).then(res => {
            setIsLoading(current => false);
            navigate('/');
        }).catch(e => {
            if ("message" in e.response.data) {
                alert(e.response.data.message);
            } else if (e.code === 'ERR_BAD_REQUEST' && "0" in e.response.data) {
                let message = '';
                e.response.data.forEach(elem => message += elem + ' ')
                alert(message);
            }
            else {
                alert('Um erro inesperado ocorreu!');
            }
            setIsLoading(current => false);
            // console.log(e);
        })
        return;
    }

    return (
        <Body>
            <LogoContainer>
                <Logo>
                    <Titulo>linkr</Titulo>
                    <SubTitle>save, share and discover the best links on the web</SubTitle>
                </Logo>
            </LogoContainer>

            <FormWrapper>
                <form onSubmit={handleLogin}>

                    <input type='text' placeholder='e-mail' value={emailRegister}
                        onChange={e => {
                            if (isLoading) return;
                            setEmailRegister(e.target.value)
                        }} required />
                    <input type='password' placeholder='password' value={passwordRegister}
                        onChange={e => {
                            if (isLoading) return;
                            setPasswordRegister(e.target.value)
                        }} required />
                    <input type='text' placeholder='username' value={usernameRegister}
                        onChange={e => {
                            if (isLoading) return;
                            setUsernameRegister(e.target.value)
                        }} required />
                    <input type='url' placeholder='picture url' value={urlRegister}
                        onChange={e => {
                            if (isLoading) return;
                            setUrlRegister(e.target.value)
                        }} required />


                    <SubmitButton>
                        Sign Up
                        {/* {isLoading ?
                            <ThreeDots
                                height="2rem"
                                width="2rem"
                                radius="6"
                                color="white"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                visible={true}
                            /> :
                            'Cadastrar'} */}
                    </SubmitButton>

                    <LinkWrapper>
                        <Link to='/'>Switch back to log in</Link>
                    </LinkWrapper>

                </form>
            </FormWrapper>

        </Body>

    );
}