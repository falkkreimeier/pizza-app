import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/Landingpage/LandingPage";
import OrderingOverview from "./components/Ordering/OrderingOverview";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Appetizers from "./components/Ordering/Appetizers";
import Salads from "./components/Ordering/Salads";

function App() {
  const [showOrderingOverview, setShowOrderingOverview] = useState(false);

  function ClickOnShoppingCart() {
    setShowOrderingOverview(true);
  }

  // const current = window.location.pathname;
  // this.props.navigate.reaplace("/reload");
  // setTimeout(() => {
  //   this.props.navigate.replace(current);
  // });

  // window.onload = function () {
  //   if (!window.location.hash) {
  //     window.location = window.location + "#loaded";
  //     window.location.reload();
  //   }
  // };

  // const navigate = useNavigate();
  // navigate.go(0);

  return (
    <Wrapper>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/karte" element={<OrderingOverview />} />
          <Route path="/vorspeisen" element={<Appetizers />} />
          <Route path="/salate" element={<Salads />} />
        </Routes>
      </Main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  height: var(--app-height);
  width: var(--app-width);
  background-color: yellow;
`;

const Main = styled.main``;

export default App;
