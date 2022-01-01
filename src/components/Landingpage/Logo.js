import styled from "styled-components/macro";
import Pizza from "../Assets/Pizza-Bild.jpeg";

function Logo() {
  return (
    <Wrapper>
      <Image src={Pizza} alt=""></Image>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: var(--app-width);
  margin: 0 auto;
  background-color: white;
  height: 328px;
`;

const Image = styled.img`
  height: 330px;
  margin-left: 155px;
`;

export default Logo;
