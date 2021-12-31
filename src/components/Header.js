import styled from "styled-components/macro";
import { BsList as Menu } from "react-icons/bs";
import { IconContext } from "react-icons";

function Header({ onClickonShoppingCart }) {
  return (
    <Wrapper>
      <Text>Pizzaria Name</Text>
      <IconPosition>
        <IconContext.Provider
          value={{
            size: "30px",
          }}
        >
          <Menu onClick={onClickonShoppingCart(true)} />
        </IconContext.Provider>
      </IconPosition>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: var(--app-width);
  background-color: black;
  margin: 0 auto;
  color: white;
`;

const Text = styled.p`
  padding-top: 20px;
  text-align: center;
`;

const IconPosition = styled.div`
  position: relative;
  left: 320px;
  bottom: 20px;
`;

export default Header;
