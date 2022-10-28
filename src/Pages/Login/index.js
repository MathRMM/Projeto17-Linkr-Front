import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProfile } from "../../Services/useProfile";

import { postLogin } from "../../Services/SignIn-SignUp/login";
import Context from "../../Context";

import { LogoContainer, Logo, Titulo, SubTitle, Body, FormWrapper, SubmitButton, LinkWrapper } from "./styledComponents";


export function Login() { // TODO - criar uma rota q verifica se o usuário está com session aberta >> redireciona para a timeline (ou retorna para a página anterior)
    const [isLoading, setIsLoading] = useState(false);
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const navigate = useNavigate();

    const [user, setUser] = useContext(Context);
    const checkSession = useProfile(user, setUser);

    useEffect(checkSession, []);

    function handleLogin(e) {
        if (isLoading) return;
        e.preventDefault();

        setIsLoading(current => true);

        const body = {
            email: emailLogin,
            password: passwordLogin,
        }

        postLogin(body).then(res => {
            console.log(res.data)
            setUser(current => ({
                id : res.data.id,
                username: res.data.username,
                image: res.data.image,
                token: res.data.token,
            }))
            localStorage.setItem('id', res.data.id);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('image', res.data.image);
            localStorage.setItem('token', res.data.token);
            setIsLoading(current => false);
            navigate('/timeline');
            return;
        }).catch(e => {
            console.log(e)
            if ("message" in e.response.data) {
                alert(e.response.data.message);
            } else if (e.code === 'ERR_BAD_REQUEST' && "0" in e.response.data) {
                let message = '';
                e.response.data.forEach(elem => message += elem + ' ')
                alert(message);
            } else {
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

                    <input type='text' placeholder='e-mail' value={emailLogin}
                        onChange={e => {
                            if (isLoading) return;
                            setEmailLogin(e.target.value)
                        }} required />
                    <input type='password' placeholder='password' value={passwordLogin}
                        onChange={e => {
                            if (isLoading) return;
                            setPasswordLogin(e.target.value)
                        }} required />

                    <SubmitButton>
                        Log In
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
                        <Link to='/sign-up'>First time? Create an account!</Link>
                    </LinkWrapper>

                </form>
            </FormWrapper>

        </Body>

    );
}