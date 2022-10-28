import styled from "styled-components";
import { useState, useEffect } from "react";
import useInterval from 'use-interval'
import { TfiReload } from 'react-icons/tfi'
import { updatePost } from "../../../Services/Posts/post";

export default function CountPosts(props) {
    const [update, setUpdate] = useState(false)
    const [count, setCount] = useState(0)
    const [renderCount, setRenderCount] = useState(0)

    useEffect(()=>{
        updatePost(props.user.token)
            .then(e => setCount(Number(e.data.count)))
    }
    , [props.posts])

    useInterval(()=>{
        updatePost(props.user.token)
            .then(e => {
                if(Number(e.data.count) > count){
                    setCount(Number(e.data.count))
                    setRenderCount(Number(e.data.count) - count)
                    setUpdate(true)
                }
            })
    }, 15000)

    function updateTimeline(){
        props.setPosts([])
        props.setPage(1)
        props.setReload(!props.reload)
        setUpdate(false)
    }

    return (
        <>
            {update? (<Count onClick={updateTimeline}>
                <h2>
                    {renderCount + ' new posts, load more!'}
                </h2>
                <h3><TfiReload /></h3>
            </Count>) : ''}
        </>
    )
}

const Count = styled.div`
    width: 100%;
    height: 60px;
    background: #1877F2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    h2, h3{
        width: auto;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        margin: 0;
        text-align: center;
    }

    h3{
        margin-left: 12px;
    }
`