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

const Wrapper = styled.section``;

const IconShoppingCart = styled.img``;

const Text = styled.p``;

const Total = styled.div``;

export default ShoppingCart;
