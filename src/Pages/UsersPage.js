import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import Context from "../Context";
import InfiniteScroll from 'react-infinite-scroller';

import Main from "../Components/Main/Main"
import Posts from "../Components/Posts/Posts"
import * as requestFollow from "../Services/Following/follow"
import { getUser } from "../Services/Users/users"
import Loading from '../Components/Posts/helpers/Loading';
import styled from "styled-components"

export default function UsersPage() {
    const userId = useParams().id
    const [account] = useContext(Context);
    const [isAccountPage, setIsAccountPage] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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
                    user.posts.push(...data.posts)
                    setReloadRender(!reloadRender)
                    setHasMore(true)
                } else {
                    setHasMore(false)
                }
            })
            .catch(e => {
                alert('An unexpected error has occured! Please try again.');
                console.error(e);
            })
    }, [reload, account.token, userId])

    useEffect(() => {
        setUser(user)
    }, [reloadRender])

    useEffect(() => {
        if (account.id == user.userId) {
            setIsAccountPage(current => true);
            console.log(isAccountPage);
        } else {
            requestFollow.getIsFollowing(userId, account.token)
                .then(res => setIsFollowing(res.data.following ?? false))
                .catch(e => {
                    alert('An unexpected error has occured! Please try again.');
                    console.error(e);
                })
            console.log(isAccountPage);
        }
    }, [])

    function handleFollow() {
        if (isLoading) return;
        setIsLoading(current => true);
        if (isFollowing) {
            requestFollow.getRemoveFollow(userId, account.token).then(res => {
                if (res.status === 200 && res.data === 'Ok') {
                    setIsFollowing(current => false);
                }
            }).catch(e => {
                alert('An unexpected error has occured! Please try again.');
                console.log(e);
            });
        } else {
            requestFollow.getAddFollow(userId, account.token).then(res => {
                if (res.status === 200 && res.data === 'Ok') {
                    setIsFollowing(current => true);
                }
            }).catch(e => {
                alert('An unexpected error has occured! Please try again.');
                console.log(e)
            });
        }
        setIsLoading(current => false);
        return;
    }


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
                <div>
                    <h2>
                        <span>
                            <img src={user.userPicUrl} alt='imagem do usuario' />
                            {`${user.username} post's`}
                        </span>
                        {
                            !isAccountPage &&
                            <FollowButton
                                isFollowing={isFollowing}
                                onClick={handleFollow}
                            >
                                {isFollowing ? 'Unfollow' : 'Follow'}
                            </FollowButton>
                        }
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

const FollowButton = styled.button.attrs({ type: 'button' })`
    height: 2.8rem;
    width: 10rem;
    cursor: pointer;
    color: ${props => props.isFollowing ? '#1877F2' : '#FFFFFF'};
    background-color: ${props => props.isFollowing ? '#FFFFFF' : '#1877F2'};
    border-radius: 5px;
    border: none;
    font-weight: 700;
`