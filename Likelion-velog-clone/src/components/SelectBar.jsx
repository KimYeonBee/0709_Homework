import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faRss } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Selection = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    font-size: 18px;
    width: 100%;
    color: gray;

    p {
        
    }
`;

const Trending = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: ${props => (props.$active ? "2px solid black" :
    "2px solid transparent")};
    color: ${props => (props.$active ? "black" :
    "gray")};
    p {
        font-weight: ${props => (props.$active ? "bold" :
            "normal")};
    }
`;

const Recent = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: ${props => (props.$active ? "2px solid black" :
    "2px solid transparent")};
    color: ${props => (props.$active ? "black" :
    "gray")};
    p {
        font-weight: ${props => (props.$active ? "bold" :
            "normal")};
    }
`;

const Feed = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: ${props => (props.$active ? "2px solid black" :
    "2px solid transparent")};
    color: ${props => (props.$active ? "black" :
    "gray")};
    p {
        font-weight: ${props => (props.$active ? "bold" :
            "normal")};
    }
`;



export default function SelectBar() {
    const [selected, setSelected] = useState("trending");
    return (
        <Selection>
            <Trending
                $active={selected == "trending"}
                onClick={() => setSelected("trending")}>
                <FontAwesomeIcon icon={faArrowTrendUp} />
                <p>트렌딩</p>
            </Trending>
            <Recent
                $active={selected == "recent"}
                onClick={() => setSelected("recent")}>
                <FontAwesomeIcon icon={faClock} />
                <p>최신</p>
            </Recent>
            <Feed
                $active={selected == "feed"}
                onClick={() => setSelected("feed")}>
                <FontAwesomeIcon icon={faRss} />
                <p>피드</p>
            </Feed>
        </Selection>

    )
}