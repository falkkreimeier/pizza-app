import styled from "styled-components/macro";

function Baguettes() {
  return (
    <>
      <TextContainer>
        <Text>Gericht</Text>
        <DescriptionText></DescriptionText>
      </TextContainer>
    </>
  );
}

const TextContainer = styled.div`
  margin: 2px auto;
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

const DescriptionText = styled.p``;

export default Baguettes;
