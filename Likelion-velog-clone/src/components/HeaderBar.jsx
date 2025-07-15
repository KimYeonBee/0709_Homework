import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons';
import VelogLogo from "../assets/VelogLogo";


const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding-bottom: 16px;
`;

const Icons = styled.div`
    font-size: 18px;  
    display: flex;
    gap: 23px;
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 23px;
`;

const LoginBtn = styled.div`
    background-color: #222528;
    height: 32px;
    width: 74px;
    border-radius: 30px;
    color: white;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
`



export default function HeaderBar() {
    return (
        <HeaderWrapper>
                <VelogLogo />
            <HeaderRight>
                <Icons>
                    <FontAwesomeIcon icon={faBellRegular} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Icons>
                <LoginBtn>
                    로그인
                </LoginBtn>
            </HeaderRight> 
        </HeaderWrapper>
    )
}