import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { dummyData } from "../data/dummy_data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    grid-gap: 20px;
    padding-top: 35px;

    @media (min-width: 740px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1040px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const CardWrapper = styled.div`
    width: 100%;
    max-width: 594px;
    aspect-ratio: 735 / 594;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow: hidden;
    justify-content: flex-start;

    @media (min-width: 740px) {
        max-width: 468px;
        aspect-ratio: 496 / 468;
    }

    @media (min-width: 1040px) {
        max-width: 320px;
        aspect-ratio: 320 / 377;
    }

    > img {
        width: 100%;
        height: 40%;
        object-fit: cover;
    }
    box-shadow: 0 0 4px rgba(0,0,0,0.25);
`;

const Post = styled.div`
    padding: 10px;
    flex: 1 1 auto;
    overflow: hidden;
    margin-top: 5px;
    h1 {
        font-size: 17px;
        margin-left: 10px;
    }
    p {
        margin-left: 10px;
        margin-top: 3px;
        font-size: 14px;
    }
`;

const Info = styled.div`
    padding: 4px 8px;
    font-size: 15px;
    p{
        magin: 0;
        margin-left: 10px;
        font-size: 12px;
    }
`

const Avatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 8px;
`;

const WriterName = styled.span`
    font-size: 12px;
    color: #333;
    font-weight: 800;
`;

const LikeCount = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #333;
    svg {
    margin-right: 4px;
    }
    gap: 5px;
`;

const Like = styled.div`
    border-top: 1px solid #dadada;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
`;


export default function Cards() {
    const [posts] = useState(dummyData);

    return (
        <Container>
            {posts.map(({ postID, title, content, thumbnail, createdAt, profile, writer, like }) => (
                <CardWrapper key={postID}>
                    <img src={thumbnail} alt={title} />
                    <Post>
                        <h1>{title}</h1>
                        <p>{content}</p>
                    </Post>
                    <Info>
                        <p>{createdAt}</p>
                    </Info>
                    <Like>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar src={profile} alt={writer} />
                            <WriterName>
                                <span style={{ color: "gray", fontWeight: 400 }}>by </span>
                                {writer}</WriterName>
                        </div>
                        <LikeCount>
                            <FontAwesomeIcon icon={faHeart} />
                            {like}
                        </LikeCount>
                    </Like>
                </CardWrapper>
            ))}
        </Container>
    );
}