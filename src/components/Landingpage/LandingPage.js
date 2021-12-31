import styled from "styled-components/macro";
import Logo from "./Logo";
import Interaction from "./Interaction";
import ShoppingCart from "./ShoppingCart";

function LandingPage() {
  return (
    <Wrapper>
      <Logo />
      <Interaction />
      <ShoppingCart />
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default LandingPage;
