//set imports
import React from "react"

//html from passport to build our signin component
function SigninForm(props){
  return (
    <div className= "form-container">
      <form action="/login" method="post">
        <div>
          <label>Username:</label>
          <input type="text" name="username"/>
        </div>
      <div>
          <label>Password:</label>
          <input type="password" name="password"/>
      </div>
        <div>
          <input type="submit" value="Log In"/>
        </div>
      </form>
    </div>
  );
}

export default  SigninForm

