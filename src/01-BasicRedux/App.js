import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";
import { combineReducers, createStore } from "redux";
import productReducer from "./store/reducers/products";

const rootReducer = combineReducers({
  shop: productReducer,
});

const store = createStore(rootReducer);

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <main>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/favorites" component={FavoritesPage} />
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
