import styled from "styled-components/macro";
import PizzaImg from "../Assets/Pizza-menue.jpeg";

function DrinksHeadline() {
  return (
    <>
      <Image src={PizzaImg} alt="" />
      <Headline>Getränke</Headline>
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

export default DrinksHeadline;
