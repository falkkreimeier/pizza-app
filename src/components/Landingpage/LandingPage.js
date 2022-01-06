import styled, { css } from "styled-components/macro";
import Logo from "./Logo";
import Interaction from "./Interaction";
import { useState } from "react";

function LandingPage() {
  const [showNumber, setShowNumber] = useState(false);

  function clickPhone() {
    setShowNumber(!showNumber);
  }

  return (
    <>
      <Logo />
      <Interaction onClickPhone={clickPhone} />
      <PhoneNumberContainer showNumber={showNumber}>
        <Number>0152-05639742</Number>
      </PhoneNumberContainer>
    </>
  );
}

const PhoneNumberContainer = styled.section`
  display: none;
  position: absolute;
  bottom: 54px;
  left: 310px;
  padding: 15px;
  width: 150px;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: lightgrey;
  ${({ showNumber }) =>
    showNumber &&
    css`
      display: inline;
    `}
`;

const Number = styled.div`
  text-align: center;
  color: black;
`;

export default LandingPage;
