import React, { Component } from "react"

const UserInfo = (props) => {
  return (
    <div>
      <label>
        GitHub Username: <input id="username" type="text" placeholder="github_username" onChange={props.handleChange} />
      </label>
      <div>
        <button onClick={props.search}>Calculate my GitHub Score</button>
      </div>
    </div>
  )
}

export default UserInfo
