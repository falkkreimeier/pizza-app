import styled from "styled-components/macro";
import Header from "./Header";
import HeaderToCard from "./HeaderToCard";
import HeaderToMain from "./HeaderToMain";
import { Routes, Route } from "react-router-dom";

function HeaderRoutes() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/karte" element={<HeaderToMain />} />
        <Route path="/vorspeisen" element={<HeaderToCard />} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default HeaderRoutes;
