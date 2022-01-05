import LandingPage from "./components/Landingpage/LandingPage";
import OrderingOverview from "./components/Ordering/OrderingOverview";
import { Routes, Route } from "react-router-dom";
import Appetizers from "./components/Ordering/Appetizers";
import AppetizersHeadline from "./components/Ordering/AppetizersHeadline";
import Salads from "./components/Ordering/Salads";
import SaladsHeadline from "./components/Ordering/SaladsHeadline";
import PizzaHeadline from "./components/Ordering/PizzaHeadline";
import Pizza from "./components/Ordering/Pizza";
import Pasta from "./components/Ordering/Pasta";
import PastaHeadline from "./components/Ordering/PastaHeadline";
import DessertHeadline from "./components/Ordering/DessertHeadline";
import Dessert from "./components/Ordering/Dessert";
import DrinksHeadline from "./components/Ordering/DrinksHeadline";
import Drinks from "./components/Ordering/Drinks";
import Layout from "./components/Layout";
import Baguettes from "./components/Ordering/Baguettes";
import BaguettesHeadline from "./components/Ordering/BaguettesHeadline";
import data from "./data.json";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/karte" element={<OrderingOverview />} />
        <Route
          path="/vorspeisen"
          element={
            <>
              <AppetizersHeadline />,
              {data.Appetizers.map((props) => (
                <Appetizers food={props.food} description={props.description} />
              ))}
            </>
          }
        />
        <Route
          path="/salate"
          element={
            <>
              <SaladsHeadline />,
              {data.Salads.map((props) => (
                <Salads food={props.food} description={props.description} />
              ))}
            </>
          }
        />
        <Route
          path="Baguettes"
          element={
            <>
              <BaguettesHeadline />,
              {data.Baguettes.map((props) => (
                <Baguettes food={props.food} description={props.description} />
              ))}
            </>
          }
        />
        <Route
          path="/pizza"
          element={
            <>
              <PizzaHeadline />,
              {data.Pizza.map((props) => (
                <Pizza food={props.food} description={props.description} />
              ))}
            </>
          }
        />
        <Route
          path="/pasta"
          element={
            <>
              <PastaHeadline />,
              {data.Pasta.map((props) => (
                <Pasta food={props.food} description={props.description} />
              ))}
            </>
          }
        />
        <Route
          path="/nachtisch"
          element={
            <>
              <DessertHeadline />,
              {data.Dessert.map((props) => (
                <Dessert food={props.food} description={props.description} />
              ))}
            </>
          }
        />
        <Route
          path="/getraenke"
          element={
            <>
              <DrinksHeadline />,
              {data.Drinks.map((props) => (
                <Drinks drinks={props.drink} description={props.description} />
              ))}
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
