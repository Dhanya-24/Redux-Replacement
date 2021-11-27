import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";
import Counter from "./containers/Counter";
import configureProductsStore from "./hooks-store/products-store";
import configureCounterStore from "./hooks-store/counter-store";

configureProductsStore();
configureCounterStore();

const App = (props) => {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/favorites" component={FavoritesPage} />
        <Counter />
      </main>
    </BrowserRouter>
  );
};

export default App;
