import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // piece of code which  runs  based on given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is loged in.
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User is Loggeded out.
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //Any Cleanup is performed here
      unsubscribe();
    };
  }, []);

  console.log("User is >>>>", user);
  return (
    <Router>
      <div className="pp">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;