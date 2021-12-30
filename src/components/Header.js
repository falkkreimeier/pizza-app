import styled from "styled-components/macro";

function Header() {
  return (
    <Wrapper>
      <Menü></Menü>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: var(--app-width);
  background-color: black;
  margin: 0 auto;
  border: 1px solid white;
`;

const Menü = styled.div``;

export default Header;
