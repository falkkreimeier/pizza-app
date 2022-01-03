import LandingPage from "./components/Landingpage/LandingPage";
import OrderingOverview from "./components/Ordering/OrderingOverview";
import { Routes, Route } from "react-router-dom";
import Appetizers from "./components/Ordering/Appetizers";
import Salads from "./components/Ordering/Salads";
import Pizza from "./components/Ordering/Pizza";
import Pasta from "./components/Ordering/Pasta";
import Dessert from "./components/Ordering/Dessert";
import Drinks from "./components/Ordering/Drinks";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/karte" element={<OrderingOverview />} />
        <Route path="/vorspeisen" element={<Appetizers />} />
        <Route path="/salate" element={<Salads />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/pasta" element={<Pasta />} />
        <Route path="/nachtisch" element={<Dessert />} />
        <Route path="/getraenke" element={<Drinks />} />
      </Route>
    </Routes>
  );
}

export default App;
