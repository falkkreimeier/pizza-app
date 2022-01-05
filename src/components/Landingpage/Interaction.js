import styled from "styled-components/macro";
import { BsFillTelephoneForwardFill as Phone } from "react-icons/bs";
import { BsCart as Cart } from "react-icons/bs";
import { BsDoorClosed as Door } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function Interaction({ onClickPhone }) {
  return (
    <Wrapper>
      <Iconstyle>
        <IconContext.Provider
          value={{
            color: "white",
            size: "30px",
          }}
        >
          <Phone onClick={onClickPhone} />
        </IconContext.Provider>
      </Iconstyle>
      <Iconstyle>
        <IconContext.Provider
          value={{
            color: "white",
            size: "30px",
          }}
        >
          <Link to="/karte">
            <Cart />
          </Link>
        </IconContext.Provider>
      </Iconstyle>
      <Iconstyle>
        <IconContext.Provider
          value={{
            color: "white",
            size: "30px",
          }}
        >
          <Link to="/oeffnungszeiten">
            <Door />
          </Link>
        </IconContext.Provider>
      </Iconstyle>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: var(--app-width);
  margin: 0 auto;
  background-color: black;
  height: 120px;
`;

const Iconstyle = styled.div`
  margin: 30px 25px;
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
