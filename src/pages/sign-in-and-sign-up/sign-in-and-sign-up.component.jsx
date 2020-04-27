import React, { Component } from 'react'
import SignIn from '../../components/sign-in/sign-in.component'

export default class SignInAndSignUp extends Component {
   render() {
      return (
         <div>
            <div className="sign-in-and-sign-up">SignIn</div>
            <SignIn/>
         </div>
      )
   }
}
