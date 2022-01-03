import styled from "styled-components/macro";
import Logo from "./Logo";
import Interaction from "./Interaction";

function LandingPage() {
  return (
    <Wrapper>
      <Logo />
      <Interaction />
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default LandingPage;
