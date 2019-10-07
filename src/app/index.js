import React from 'react';
import ScrollToTop from 'components/ScrollToTop';
import Router from 'router';

const App = () => {
  const childProps = {
    isAuthenticated: false,
    userHasAuthenticated: false
  };
  return (
    <ScrollToTop>
      <Router childProps={childProps} />
    </ScrollToTop>
  );
};

export default App;
