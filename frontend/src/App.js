import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column justify-content-between min-vh-100">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="*">
              <div>Error</div>
            </Route>
          </Switch>
        </main>
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
