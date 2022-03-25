import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column justify-content-between min-vh-100">
        <main>
          <Switch>
            <Route exact path="/">
              <div>test</div>
            </Route>

            <Route path="*">
              <div>Error</div>
            </Route>
          </Switch>
        </main>

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
