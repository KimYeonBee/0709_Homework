import SelectBar from "../components/SelectBar";
import CategoryBar from "../components/CategoryBar";
import { styled } from "styled-components";

const MenuWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export default function MenuBar() {
    return <MenuWrapper>
        <SelectBar />
        <CategoryBar />
    </MenuWrapper>;
}