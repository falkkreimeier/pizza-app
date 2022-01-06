import styled from "styled-components/macro";

function Appetizers(props) {
  return (
    <>
      <TextContainer>
        <Text>{props.food}</Text>
        <DescriptionText>{props.description}</DescriptionText>
        <PriceContainer>
          <Price>{props.price}</Price>
        </PriceContainer>
      </TextContainer>
    </>
  );
}

const TextContainer = styled.div`
  margin: 2px auto;
  width: 95%;
  border-radius: 5px;
  background-color: white;
  height: 80px;
  padding: 15px;
`;

const Text = styled.p`
  text-decoration: none;
  color: black;
`;

const DescriptionText = styled.p``;

const PriceContainer = styled.div`
  position: relative;
  left: 260px;
  bottom: 15px;
  width: 60px;
  background-color: lightgrey;
  border: 1px solid black;
  border-radius: 5px;
`;

const Price = styled.p`
  text-align: center;
`;

export default Appetizers;
