import React, { Component } from "react"
import UserInfo from "../components/UserInfo"
import Axios from "axios"
import ScoreInfo from "../components/ScoreInfo"

class GitHubScorePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gitHubData: {},
      username: null,
      errorMessage: null,
      userNameValid: false
    }
  }

  search = () => {
    Axios.get(`https://api.github.com/users/${this.state.username}`)

      .then((response) => {
        console.log(response)
        this.setState({ gitHubData: response.data, userNameValid: true })
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          errorMessage: "User does not exist, pick a different Github username.",
          userNameValid: false
        })
      })
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value }, () => {
      // if (this.state.description.length < 5) {
      // 	this.setState({ descriptionValid: false })
      // }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="user-data-container">
          <h1>GitHub Score</h1>
          <UserInfo search={this.search} handleChange={this.handleChange} username={this.state.username} />
          <ScoreInfo
            userNameValid={this.state.userNameValid}
            errorMessage={this.state.errorMessage}
            gitHubData={this.state.gitHubData}
          />
        </div>
      </div>
    )
  }
}

export default GitHubScorePage
