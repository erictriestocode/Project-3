//set imports
import React, { Component } from 'react';

class SigninForm extends Component {
render() {
  return (
      <div>
          <form>
              <label>Email</label><input type="text" name="email" />
              <label>password</label><input type="text" name="password"/>
              <button type="submit">Submit</button>
          </form>
      </div>
  )
}
}

export default  SigninForm

