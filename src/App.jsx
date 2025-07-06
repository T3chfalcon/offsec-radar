import React from "react";
import { Analytics } from '@vercel/analytics/react';
import Routes from "./Routes";

function App() {
  return (
    <>
      <Routes />
      <Analytics />
    </>
  );
}

export default App;
