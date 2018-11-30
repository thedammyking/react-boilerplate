import React, { Component } from "react";
import ScrollToTop from "../../ScrollToTop";
import Router from "../../router";

class App extends Component {
  render() {
    const childProps = {
      isAuthenticated: false,
      userHasAuthenticated: false
    };
    return (
      <ScrollToTop>
        <Router childProps={childProps} />
      </ScrollToTop>
    );
  }
}

export default App;
