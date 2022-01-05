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
  height: 405px;
`;

const Image = styled.img`
  height: 405px;
  width: 230px;
  margin-left: 145px;
  object-fit: cover;
`;

export default Logo;
