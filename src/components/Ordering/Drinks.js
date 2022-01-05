import styled from "styled-components/macro";

function Drinks(props) {
  return (
    <>
      <TextContainer>
        <Text>{props.drinks}</Text>
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

export default Drinks;
