import styled from "styled-components/macro";
import { BsFillTelephoneForwardFill as Phone } from "react-icons/bs";
import { BsCart as Cart } from "react-icons/bs";
import { BsDoorClosed as Door } from "react-icons/bs";
import { IconContext } from "react-icons";

function Interaction() {
  return (
    <Wrapper>
      <Iconstyle>
        <IconContext.Provider
          value={{
            color: "white",
            size: "30px",
          }}
        >
          <Phone />
        </IconContext.Provider>
      </Iconstyle>
      <Iconstyle>
        <IconContext.Provider
          value={{
            color: "white",
            size: "30px",
          }}
        >
          <Cart />
        </IconContext.Provider>
      </Iconstyle>
      <Iconstyle>
        <IconContext.Provider
          value={{
            color: "white",
            size: "30px",
          }}
        >
          <Door />
        </IconContext.Provider>
      </Iconstyle>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: var(--app-width);
  margin: 0 auto;
  background-color: black;
  height: 150px;
`;

const Iconstyle = styled.div`
  margin: 35px 25px;
  padding: 15px;
  position: relative;
  left: 10px;
  height: 65px;
  width: 65px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 50%;
  display: inline-block;
`;

export default Interaction;
