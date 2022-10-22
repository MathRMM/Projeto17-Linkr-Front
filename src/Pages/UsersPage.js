import { useState, useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import Context from "../Context"

import Main from "../Components/Main/Main"
import Topo from "../Components/Header/Topo"
import Posts from "../Components/Posts/Posts"
import { getUser } from "../Services/Users/users"

export default function UsersPage() {
    const [account] = useContext(Context);
    const [user, setUser] = useState({})
    const userId = useParams().id

    useEffect(() => {
        getUser(userId, account.token)
            .then(e => setUser(e.data))
            .catch(e => console.error(e))
    }, [userId])

    return (
        <section>
            <Topo />
            <Main>
                <div >
                    <h2>
                        <img src={user.userPicUrl} alt='imagem do usuario' />
                        {`${user.username} post's`}
                    </h2>
                </div>
                {user.posts?.map(e => {
                    if(e){
                        <Posts
                    username={user.username}
                    picUrl={user.userPicUrl}
                    userId={user.userId}
                    postText={e.postText}
                    postLink={e.postLink}
                    key={e.postId}
                />
                    } else return
                })}
            </Main>
        </section>
    )
}