import { DebounceInput } from 'react-debounce-input'
import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { getSearchUsers } from '../../Services/Users/users';
import Context from '../../Context';

export default function SearchBar() {
    const [value, setValue] = useState('')
    const [users, setUsers] = useState([])
    const [autoComplete, setAutoComplete] = useState(false)
    const navigate = useNavigate()
    const [user] = useContext(Context)

    useEffect(() => {
        if (value !== '') {
            getSearchUsers(value, user.token)
                .then(e => {
                    if (e.data[0]) {
                        setUsers(e.data)
                        setAutoComplete(true)
                    }
                })
                .catch(setAutoComplete(false))
        } else {
            setUsers([])
        }
    }, [value])

    window.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.tagName !== 'H2' && e.target.className !== 'user') {
            setAutoComplete(false)
        }
        if (e.target.tagName === 'INPUT' && value.length >= 3) {
            setAutoComplete(true)
        }
    })

    function RenderUsersAutocomplete({ user }) {
        return (
            <h2 className='user' onClick={() => navigate(`/user/${user.id}`)}>

                <img src={user.picUrl} alt='imagem do usuario' />
                {user?.username}

                {user?.followedByUser === 'true' ? <span><BulletPoint /> following</span> : <span></span>}
            </h2>
        )
    }

    return (
        <Search>
            <DebounceInput
                minLength={3}
                debounceTimeout={300}
                onChange={e => setValue(e.target.value)}
                placeholder='Search for people'
                className='input'
            />
            {autoComplete ?
                <div className='autoComplete'>
                    {users.map(e => <RenderUsersAutocomplete
                        user={e}
                        key={e.id}
                    />)}
                </div>
                : ''}
        </Search>
    )
}

const BulletPoint = styled.div`
    background-color: black;
    opacity: 0.5;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 0.7rem;
    margin-top: 0.5rem;
    margin-right: 1rem;
`

const Search = styled.div`
    position: relative;
    font-family: 'Lato';
    .input{
        position: relative;
        width: 50vw ;
        height: 3rem;
        font-size: 20px;
        padding-left: 10px;
        z-index: 20;
    }

    .autoComplete{
        width: 40rem;
        box-sizing: content-box;
        background-color: #E7E7E7;
        border-radius: 20px;

        position: absolute;
        z-index: 2;
        top: 15px;
    }

    .autoComplete h2{
        font-size: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0px 0 10px 10px;
        cursor: pointer;

        img{
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            margin-right: 5px;
        }
    }

    .autoComplete h2:first-child{
        padding: 20px 0 10px 10px;
    }
    
    .autoComplete span{
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.5);
        margin-left: 1rem;
    }

    @media (max-width: 500px){
        position: absolute;
        margin-left: 10%;
        bottom: -50px;
        .input{
            width: 80vw;
        }
    }
`;