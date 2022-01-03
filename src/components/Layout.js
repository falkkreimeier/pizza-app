import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HeaderRoutes from "./HeaderRoutes";
import Footer from "./Footer";

function Layout() {
  return (
    <Wrapper>
      <HeaderRoutes />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  height: var(--app-height);
  width: var(--app-width);
  background-color: yellow;
`;

const Main = styled.main``;

export default Layout;
