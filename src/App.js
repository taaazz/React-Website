import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/AboutUs" exact component={AboutUs} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
