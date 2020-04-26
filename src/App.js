import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Homepage from "./pages/homepge/homepage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
