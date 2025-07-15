import { styled } from "styled-components";
import { dummyData } from "../data/dummy_data";
import HeaderBar from "../components/HeaderBar"
import MenuBar from "../components/MenuBar";
import Cards from "../components/Cards";

console.log(dummyData);

const PageWrapper = styled.div`
  margin: 16px 16px;
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

function HomePage() {
  return <PageWrapper>
    <HeaderBar />
    <MenuBar />
    <Cards />
  </PageWrapper>;
}

export default HomePage;
