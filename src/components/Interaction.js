import styled from "styled-components/macro";

function Interaction() {
  return (
    <Wrapper>
      <IconPhone></IconPhone>
      <IconShoppingCart></IconShoppingCart>
      <IconOpening></IconOpening>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: var(--app-width);
  margin: 0 auto;
  background-color: black;
  height: 150px;
`;

const IconPhone = styled.img``;

const IconShoppingCart = styled.img``;

const IconOpening = styled.img``;

export default Interaction;
