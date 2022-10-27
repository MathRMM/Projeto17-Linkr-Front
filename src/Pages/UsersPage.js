import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import Context from "../Context";
import InfiniteScroll from 'react-infinite-scroller';

import Main from "../Components/Main/Main"
import Posts from "../Components/Posts/Posts"
import { getUser } from "../Services/Users/users"
import Loading from '../Components/Posts/helpers/Loading';

export default function UsersPage() {
    const userId = useParams().id
    const [account] = useContext(Context);
    const [user, setUser] = useState({})
    const [reload, setReload] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(1)
    const [reloadRender, setReloadRender] = useState(false)

    useEffect(() => {
        getUser(userId, account.token, page)
            .then(e => {
                const data = e.data
                if (Object.keys(user).length === 0) {
                    
                    setUser(data)
                    setHasMore(true)
                }
                if (data.posts[0] && Object.keys(user).length !== 0) {
                    console.log('aqui')
                    user.posts.push(...data.posts)
                    setReloadRender(!reloadRender)
                    setHasMore(true)
                } else {
                    setHasMore(false)
                }
            })
            .catch(e => console.error(e))
    }, [reload, account.token, userId])

    useEffect(() => {
        setUser(user)
    },[reloadRender])

    function loadMore(e) {
        setPage(e)
        setHasMore(false)
        setReload(!reload)
    }

    return (
        <InfiniteScroll
            pageStart={1}
            loadMore={loadMore}
            useWindow={true}
            initialLoad={false}
            hasMore={hasMore}
            threshold={-50}
        >
            <Main>
                <div >
                    <h2>
                        <img src={user.userPicUrl} alt='imagem do usuario' />
                        {`${user.username} post's`}
                    </h2>
                </div>
                {user.posts?.map(e => {
                    if (e) {
                        return (
                            <Posts
                                username={user.username}
                                picUrl={user.userPicUrl}
                                userId={user.userId}
                                dataPost={e}
                                key={e.postId}
                            />
                        )
                    } else return
                })}
                {hasMore ? <Loading /> : ''}
            </Main>
        </InfiniteScroll>
    )
}