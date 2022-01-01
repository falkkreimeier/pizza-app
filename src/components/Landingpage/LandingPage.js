import styled from "styled-components/macro";
import Logo from "./Logo";
import Interaction from "./Interaction";
import ShoppingCart from "./ShoppingCart";

function LandingPage({ OnShoppingCartButtonClick }) {
  return (
    <Wrapper>
      <Logo />
      <Interaction OnShoppingCartButtonClick={OnShoppingCartButtonClick} />
      <ShoppingCart />
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default LandingPage;
