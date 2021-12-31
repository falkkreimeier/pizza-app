import styled from "styled-components/macro";

function OrderingOverview() {
  return (
    <Wrapper>
      <Text>Appetizers</Text>
      <Text>Salads</Text>
      <Text>Pizza</Text>
      <Text>Pasta</Text>
      <Text>Dessert</Text>
      <Text>Drinks</Text>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Text = styled.p``;

export default OrderingOverview;
