import styled from "styled-components/macro";

function Footer() {
  return <Wrapper>Footer</Wrapper>;
}

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: var(--app-width);
  background-color: black;
  color: white;
  margin: 0 auto;
`;

export default Footer;
