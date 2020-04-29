import React, { Component } from 'react'
import './sign-up.styles.scss'
import CustomButton from '../cutom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js'


export default class SignUp extends Component {
   constructor() {
      super();
      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: ''
      }
   }

   handleSubmit = async event => {
      const { displayName, email, password, confirmPassword } = this.state
      event.preventDefault()
      if (password !== confirmPassword) {
         alert('Passwords do not match!')
         return;
      }
      try {
         const { user } = await auth.createUserWithEmailAndPassword(email, password)
         createUserProfileDocument(user, { displayName })

         this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
         })
      } catch (err) {
         console.error(err)
      }
   }

   handleChange = e => {
      const { name, value } = e.target
      this.setState({
         [name]: value
      })
   }

   render() {
      const { displayName, email, password, confirmPassword } = this.state
      return (
         <div className='sign-up'>
            <h2 className="title">I do not have an account</h2>
            <span>Sign Up with your email and password</span>
            <form action="" className="sign-up-form" onSubmit={this.handleSubmit} >
               <FormInput type='text' name='displayName' required value={displayName} onChange={this.handleChange} label='Display Name' />
               <FormInput type='email' name='email' required value={email} onChange={this.handleChange} label='Email' />
               <FormInput type='password' name='password' required value={password} onChange={this.handleChange} label='Password' />
               <FormInput type='password' name='confirmPassword' required value={confirmPassword} onChange={this.handleChange} label='Confirm Password' />
               <CustomButton type='submit' >Sign Up</CustomButton>
            </form>
         </div>
      )
   }
}
