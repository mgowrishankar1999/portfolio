import React from "react"
import Home from "./components/frontend/home"
import { Analytics } from '@vercel/analytics/react';


function App() {

  return (
    <>
      <Home />
      <Analytics />

    </>
  )
}

export default App
