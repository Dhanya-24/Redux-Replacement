import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";
import ProductsProvider from "./context/products-context";

const App = (props) => {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Navigation />
        <main>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/favorites" component={FavoritesPage} />
        </main>
      </BrowserRouter>
    </ProductsProvider>
  );
};

export default App;
