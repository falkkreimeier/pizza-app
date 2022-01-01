import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/Landingpage/LandingPage";
import OrderingOverview from "./components/Ordering/OrderingOverview";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [showOrderingOverview, setShowOrderingOverview] = useState(false);

  function ClickOnShoppingCart() {
    setShowOrderingOverview(true);
    console.log("clicked");
  }

  return (
    <Wrapper>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage OnShoppingCartButtonClick={ClickOnShoppingCart} />
            }
          />
          <Route
            path="/karte"
            element={
              <OrderingOverview showOrderingOverview={showOrderingOverview} />
            }
          />
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
