import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Interaction from "./components/Interaction";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <Wrapper>
      <Header />
      <Logo />
      <Interaction />
      <ShoppingCart />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  height: var(--app-height);
  background-color: yellow;
`;

export default App;
