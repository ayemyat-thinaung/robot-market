import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RobotsContextProvider } from "./contexts/robots.context";
import { CartContextProvider } from "./contexts/cart/cart.context";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";
import Products from "./pages/products/Products";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column justify-content-between min-vh-100">
        <CartContextProvider>
          <Navbar />
          <main>
            <RobotsContextProvider>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/products">
                  <Products />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </RobotsContextProvider>
          </main>
        </CartContextProvider>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
};

export default App;
