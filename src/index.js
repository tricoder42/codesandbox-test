import React from "react"
import ReactDOM from "react-dom"
import preval from "preval.macro"
import { I18nProvider } from "@lingui/react"
import { Trans } from "@lingui/macro"

import "./styles.css"

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox {preval`module.exports = 1 + 2`}</h1>
      <Trans>Start editing to see some magic happen!</Trans>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
