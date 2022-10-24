import { useNavigate, useLocation } from "react-router-dom";

import { getUserProfile } from "./SignIn-SignUp/login.js";

export const useProfile = (context, setContext) => {
    const navigate = useNavigate();
    const location = useLocation();

    const checkSession = () => {
        if (context?.token !== null && localStorage.getItem('token') !== null) {
            getUserProfile(context.token).then(res => {
                localStorage.setItem('username', res.data.username);
                localStorage.setItem('image', res.data.image);
                const token = localStorage.getItem('token');
                setContext(current => ({
                    username: res.data.username,
                    image: res.data.image,
                    token: token,
                }))
                navigate('/timeline');
            }).catch(e => {
                if (e.response.data === 'Session Expired' && e.response.status === 403) {
                    alert('Your session has expired! Please,make the login again.');
                    localStorage.removeItem('token');
                    if (location.pathname !== '/') {
                        navigate('/');
                        window.location.reload();
                    }
                }
                console.log(e);
            })
        };
    }
    return checkSession;
}