import React from "react"
import UserInfo from "../components/UserInfo"
import ScoreInfo from "../components/ScoreInfo"
import Axios from "axios"

class GitHubScorePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gitHubData: {},
      gitHubScore: null,
      username: null,
      errorMessage: null,
      userNameValid: false
    }
  }

  search = () => {
    Axios.get(`https://api.github.com/users/${this.state.username}`)
      .then((response) => {
        console.log(response)
        let score = response.data.followers + response.data.public_repos
        this.setState({
          gitHubData: response.data,
          userNameValid: true,
          gitHubScore: score
        })
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
    this.setState({ [event.target.id]: event.target.value }, () => {})
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
            gitHubScore={this.state.gitHubScore}
          />
        </div>
      </div>
    )
  }
}

export default GitHubScorePage
