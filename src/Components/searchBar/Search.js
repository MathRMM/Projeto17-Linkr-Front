import { DebounceInput } from 'react-debounce-input'
import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { getSearchUsers } from '../../Services/Users/users';

export default function SearchBar() {
    const [value, setValue] = useState('')
    const [users, setUsers] = useState([])
    const [autoComplete, setAutoComplete] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (value !== '') {
            getSearchUsers(value)
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
        if (e.target.tagName==='INPUT' && value.length >= 3){
            setAutoComplete(true)
        }
    })

    function RenderUsersAutocomplete({ user }) {
        return (
            <h2 className='user' onClick={() => navigate(`/user/${user.id}`)}>
                <img src={user.picUrl} alt='imagem do usuario'/>
                {user?.username}
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

const Search = styled.div`
    position: relative;
    .input{
        width: 40rem ;
        height: 3rem;
        font-size: 20px;
        padding-left: 10px;
    }

    .autoComplete{
        position: absolute;
        width: 40rem;
        box-sizing: content-box;
        background-color: #E7E7E7;
    }

    .autoComplete h2{
        font-size: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 0 10px 10px;

        img{
            width: 4rem;
            height: 4rem;
        }
    }
`;