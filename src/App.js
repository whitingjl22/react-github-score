import React, { Component } from "react"
import "./App.css"
import GitHubScorePage from "./container/GitHubScorePage"

class App extends Component {
  render() {
    return (
      <div className="App">
        <GitHubScorePage />
      </div>
    )
  }
}

export default App
