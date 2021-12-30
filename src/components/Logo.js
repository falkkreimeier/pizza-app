import styled from "styled-components/macro";

function Logo() {
  return (
    <Wrapper>
      <Image></Image>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: var(--app-width);
  margin: 0 auto;
  background-color: white;
  height: 328px;
`;

const Image = styled.img``;

export default Logo;
