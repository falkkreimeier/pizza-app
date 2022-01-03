import styled from "styled-components/macro";
import PizzaImg from "../Assets/Pizza-menue.jpeg";

function Pizza() {
  return (
    <Wrapper>
      <Image src={PizzaImg} alt="" />
      <TextContainer>
        <Text>Pizza1</Text>
      </TextContainer>
      <TextContainer>
        <Text>Pizza2</Text>
      </TextContainer>
      <TextContainer>
        <Text>Pizza3</Text>
      </TextContainer>
      <TextContainer>
        <Text>Pizza4</Text>
      </TextContainer>
      <TextContainer>
        <Text>Pizza5</Text>
      </TextContainer>
      <TextContainer>
        <Text>Pizza6</Text>
      </TextContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Image = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
`;

const TextContainer = styled.div`
  margin: 0 auto;
  width: 95%;
  border-radius: 5px;
  background-color: white;
  height: 50px;
  padding: 15px;
`;

const Text = styled.p`
  text-decoration: none;
  color: black;
`;

export default Pizza;
