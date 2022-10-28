import styled from "styled-components"
import { TailSpin } from 'react-loader-spinner'

export default function Loading({hasMore}) {
    return (
        <LoadingStyle>
            <TailSpin color="#6D6D6D"/>
            <p>Load more posts...</p>
        </LoadingStyle>
    )
}

const LoadingStyle = styled.div`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.05em;
    color: #6D6D6D;
    width: 100%;
    text-align: center;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`