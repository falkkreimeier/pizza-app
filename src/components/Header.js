import styled from "styled-components/macro";
import { BiStoreAlt as Menu } from "react-icons/bi";
import { IconContext } from "react-icons";

function Header() {
  return (
    <Wrapper>
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

export default Header;
