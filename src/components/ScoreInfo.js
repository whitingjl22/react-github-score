import React, { Component } from "react"

const ScoreInfo = (props) => {
  return (
    <div className="scoreInfo">
      {props.userNameValid ? <span>Your Score: {props.gitHubData.public_repos}</span> : <span>{props.errorMessage}</span>}
    </div>
  )
}

export default ScoreInfo
