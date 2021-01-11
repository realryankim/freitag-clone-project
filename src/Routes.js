import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import Cart from "./Pages/Cart/Cart";
import MyPage from "./Pages/MyPage/MyPage";
import Payment from "./Pages/Payment/Payment";
import Product from "./Pages/Product/Product";
import ProductList from "./Pages/ProductList/ProductList";
import Store from "./Pages/Store/Store";
import StoreDetail from "./Pages/Store/StoreDetail";
import Main from "./Pages/Main/Main";
import Test from "./Pages/ReducerTest/Test";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/CreateAccount" component={CreateAccount} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/MyPage" component={MyPage} />
        <Route exact path="/Payment" component={Payment} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/Product/:id" component={Product} />
        <Route exact path="/ProductList" component={ProductList} />
        <Route exact path="/Store" component={Store} />
        <Route exact path="/StoreDetail" component={StoreDetail} />
        <Route exact path="/StoreDetail/:id" component={StoreDetail} />
        <Route exact path="/" component={Main} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Router>
  );
}

export default Routes;
