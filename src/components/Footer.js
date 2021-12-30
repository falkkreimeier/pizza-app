import styled from "styled-components/macro";

function Footer() {
  return <Wrapper>Footer</Wrapper>;
}

const Wrapper = styled.footer`
  width: var(--app-width);
  background-color: black;
  color: white;
  margin: 0 auto;
  border: 1px solid white;
`;

export default Footer;
