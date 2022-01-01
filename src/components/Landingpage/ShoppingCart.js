import styled from "styled-components/macro";

function ShoppingCart() {
  return (
    <Wrapper>
      <IconShoppingCart></IconShoppingCart>
      <Text>Warenkorb</Text>
      <Total></Total>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: var(--app-width);
  margin: 0 auto;
  background-color: white;
  height: 100px;
`;

const IconShoppingCart = styled.img``;

const Text = styled.p``;

const Total = styled.div``;

export default ShoppingCart;
