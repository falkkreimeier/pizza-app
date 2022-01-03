import styled from "styled-components/macro";
import { BsList as Menu } from "react-icons/bs";
import { IconContext } from "react-icons";
import { BsFillArrowLeftCircleFill as BackArrow } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/karte" ? (
        <Link to="/karte">
          <BackArrowPosition>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <BackArrow />
            </IconContext.Provider>
          </BackArrowPosition>
        </Link>
      ) : (
        ""
      )}

      <Text>Pizzaria Name</Text>
      <IconPosition>
        <IconContext.Provider
          value={{
            size: "30px",
          }}
        >
          <Menu />
        </IconContext.Provider>
      </IconPosition>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;

  padding: 15px;
  width: var(--app-width);
  background-color: black;
  margin: 0 auto;
  color: white;
`;

const Text = styled.p`
  position: relative;
  top: 8px;
  left: 95px;
`;

const IconPosition = styled.div`
  position: relative;
  left: 180px;
`;

const BackArrowPosition = styled.div`
  position: relative;
  left: 20px;
`;

export default Header;
