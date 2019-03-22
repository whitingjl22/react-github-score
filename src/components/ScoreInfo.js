import React from "react"

const ScoreInfo = (props) => {
  // console.log("props", props)

  const scoreMessage = () => {
    if (props.gitHubScore < 20) {
      return <h3 style={{ color: "red" }}>Needs Work!</h3>
    } else if (props.gitHubScore > 20 && props.gitHubScore < 50) {
      return <h3 style={{ color: "orange" }}>A decent start!</h3>
    } else if (props.gitHubScore > 50 && props.gitHubScore < 100) {
      return <h3 style={{ color: "black" }}>Doing good!</h3>
    } else if (props.gitHubScore > 100 && props.gitHubScore < 200) {
      return <h3 style={{ color: "green" }}>Great job!</h3>
    } else if (props.gitHubScore >= 200) {
      return <h3 style={{ color: "blue" }}> Github Elite!</h3>
    }
  }

  return (
    <div className="scoreInfo">
      {props.userNameValid ? (
        <span>
          Your Score: {props.gitHubScore} {scoreMessage()}
        </span>
      ) : (
        <span>{props.errorMessage}</span>
      )}
    </div>
  )
}

export default ScoreInfo
