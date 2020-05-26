import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomButton from '../cutom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
   constructor() {
      super();
      this.state = {
         email: '',
         password: ''
      }
   }

   handleSubmit = async (e) => {
      e.preventDefault()
      const { email, password } = this.state
      try {
         await auth.signInWithEmailAndPassword(email, password)
         this.setState({
            email: '',
            password: ''
         })
      } catch (error) {
         console.log(error)
      }
   }

   handleChange = (e) => {
      const { value, name } = e.target
      this.setState({ [name]: value })
   }

   render() {
      return (
         <div className='sign-in' >
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit} >
               <FormInput handleChange={this.handleChange} type="email" name="email" value={this.state.email} label='email' required />
               <FormInput handleChange={this.handleChange} type="password" name="password" value={this.state.password} label='password' required />
               <div className="buttons">
                  <CustomButton type="submit">SignIn</CustomButton>
                  <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >Sign In WIth Google</CustomButton>
               </div>
            </form>
         </div>
      )
   }
}
