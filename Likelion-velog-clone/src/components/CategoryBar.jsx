import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    gap: 10px;
`;

// Custom filter dropdown
const FilterWrapper = styled.div`
    position: relative;
    display: flex;
    padding: 0 8px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0,0,0,0.25);
    font-size: 14px;
    cursor: pointer;
    width: 85px;
    height: 32px;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
    font-weight: 500;
`;

const FilterLabel = styled.span`
    color: #333;
`;

const Caret = styled(FontAwesomeIcon)`
  margin-left: 6px;
  color: #666;
  margin-right: 4px;
  padding-right: 4px;
`;

const FilterList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  padding: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  list-style: none;
  z-index: 10;
`;

const FilterItem = styled.li`
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
  color: ${props => (props.active ? "#38a169" : "#333")};
  font-weight: ${props => (props.active ? "bold" : "normal")};
  &:last-child { border-bottom: none; }
  &:hover { background: #f9f9f9; }
`;

// const SelectBox = styled.select`
//     font-size: 14px;
//     display: flex;
//     font-weight: 500;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     appearance: none;
//     border: none;
//     outline: none;
// `;

// const SelectContainer = styled.div`
//     position: relative;
//     display: inline-block;
//     padding: 0 8px;
//     height: 32px;
//     width: 85px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
//     margin-right: 10px;
//     background-color: white;
//     border-radius: 4px;
// `;


const Details = styled.details`
    position: relative;
`;

const Summary = styled.summary`
    list-style: none;
    cursor: pointer;
    padding: 6px;
    font-size: 18px;
    &::-webkit-details-marker {
    display: none;
}
`;

const MenuList = styled.ul`
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 4px;
    padding: 8px 0;
    width: 180px;
    background: #fff;
    border: 1px solid #e9e9e9;
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    list-style: none;
    z-index: 10;
`;

const MenuItem = styled.li`
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    &:hover {
    background: #f0f0f0;
}
`;

export default function CategoryBar() {
    const selectList = [
        { value: "today", label: "오늘" },
        { value: "week", label: "이번 주" },
        { value: "month", label: "이번 달" },
        { value: "year", label: "올해" },
    ];

    const menuItems = [
        "공지사항",
        "태그 목록",
        "서비스 정책",
        "Slack",
        "문의"
    ];

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("week");
    const ref = useRef();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <MenuWrapper>
            <FilterWrapper ref={ref} onClick={() => setOpen(o => !o)}>
                <FilterLabel>
                    {selectList.find(opt => opt.value === selected)?.label}
                </FilterLabel>
                <Caret icon={faCaretDown} />
                {open && (
                    <FilterList>
                        {selectList.map(opt => (
                            <FilterItem
                                key={opt.value}
                                active={opt.value === selected}
                                onClick={() => {
                                    setSelected(opt.value);
                                    setOpen(false);
                                }}
                            >
                                {opt.label}
                            </FilterItem>
                        ))}
                    </FilterList>
                )}
            </FilterWrapper>

            <Details>
                <Summary>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </Summary>
                <MenuList>
                    {menuItems.map((txt, i) => (
                        <MenuItem
                            key={i}
                            style={txt.startsWith("문의") ? { pointerEvents: "none", color: "#999" } : {}}
                        >
                            {txt}
                        </MenuItem>
                    ))}
                </MenuList>
            </Details>
        </MenuWrapper>
    );
}