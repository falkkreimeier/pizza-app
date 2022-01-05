import styled from "styled-components/macro";
import PizzaImg from "../Assets/Pizza-menue.jpeg";

function SaladsHeadline() {
  return (
    <>
      <Image src={PizzaImg} alt="" />
      <Headline>Salate</Headline>
    </>
  );
}

const Headline = styled.h2`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
`;

export default SaladsHeadline;
