import React from "react"

const UserInfo = (props) => {
  return (
    <div>
      <label>
        GitHub Username: <input id="username" type="text" placeholder="github_username" onChange={props.handleChange} />
      </label>
      <div>
        <button onClick={props.search} disabled={props.username === null || props.username === ""}>
          Calculate my GitHub Score
        </button>
      </div>
    </div>
  )
}

export default UserInfo
