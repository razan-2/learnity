import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { useAuth } from '../../context/Auth/Auth';
import { doSignInWithEmailAndPassword, doSignInWithGoogle, doCreateUserWithEmailAndPassword } from '../../firebase/auth';
import { Navigate } from 'react-router-dom';
import bcrypt from 'bcryptjs-react';
import { adminEmail } from './.consts';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [confirmPassword, setconfirmPassword] = useState('')

  // log in and sign up values

  const [isSignUp, setIsSignUp] = useState(false);

  const { userLoggedIn, AdminToggle, handleAccount } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSignUp) {
      await doSignInWithEmailAndPassword(email, password)
        .then(() => {
          bcrypt.compare(email, adminEmail)
          .then((res) => {console.log(res); if(res) { AdminToggle(); };})
        })
        .catch((err) => alert(err))
    } else {
      if (password == confirmPassword) {
        await doCreateUserWithEmailAndPassword(email, password)
        .catch((err) => alert(err))
        handleAccount({name: name, email: email})
      } else {
        console.log("The passwords must match")
      }
    }
  }

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSignUp) {
      setIsSignUp(true);
      doSignInWithGoogle(email, password)
        .catch((error) => { console.log(error); setIsSignUp(false)})
    }
  }

  const handleInput = (event, setter) => {
    setter(event.target.value);
  }

  return (
    <div>
      {userLoggedIn && (<Navigate to={'/account'} replace={true} />)}
      <div className="min-h-screen flex items-center justify-center bg-[#F0E6DD] p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full"
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-[#05be9e] p-8 flex flex-col justify-center relative overflow-hidden">
              <motion.div
                className="absolute top-4 left-4 w-20 h-20 bg-[#F8A12E] rounded-full"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-16 h-16 bg-[#F8A12E] rounded-full"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="text-white text-center md:text-left relative z-10">
                <motion.div
                  className="mb-4 inline-block bg-white rounded-full p-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-10 h-10 text-[#05be9e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <h2 className="text-3xl font-bold mb-2">Welcome to Learnity</h2>
                <p className="text-[#F0E6DD] mb-6">Join our playful learning adventure! Discover, create, and grow with us.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8 bg-[#F0E6DD]">
              <h3 className="text-2xl font-bold mb-6 text-[#2f2f27]">{isSignUp ? 'Create your account' : 'Sign in to your account'}</h3>
              <form className="space-y-4">
                {isSignUp && (
                  <motion.input
                    whileFocus={{ scale: 1.05 }}
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-full border-2 border-[#05be9e] focus:outline-none focus:border-[#F8A12E] transition-colors bg-white"
                    onChange={(event) => handleInput(event, setName)}
                  />
                )}
                <motion.input
                  whileFocus={{ scale: 1.05 }}
                  type="email"
                  required
                  placeholder="E-mail Address"
                  className="w-full px-4 py-3 rounded-full border-2 border-[#05be9e] focus:outline-none focus:border-[#F8A12E] transition-colors bg-white"
                  onChange={(event) => handleInput(event, setEmail)}
                />
                <motion.input
                  whileFocus={{ scale: 1.05 }}
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-full border-2 border-[#05be9e] focus:outline-none focus:border-[#F8A12E] transition-colors bg-white"
                  onChange={(event) => handleInput(event, setPassword)}
                />
                {isSignUp && (
                  <motion.input
                    whileFocus={{ scale: 1.05 }}
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-3 rounded-full border-2 border-[#05be9e] focus:outline-none focus:border-[#F8A12E] transition-colors bg-white"
                    onChange={(event) => handleInput(event, setconfirmPassword)}
                  />
                )}
                {isSignUp && (
                  <div className="flex items-center">
                    <input type="checkbox" id="terms" className="mr-2" />
                    <label htmlFor="terms" className="text-sm text-[#2f2f27]">I agree to the Terms & Conditions</label>
                  </div>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-full bg-[#F8A12E] text-white font-bold text-lg hover:bg-[#f59300] transition-colors"
                  onClick={onSubmit}
                >
                  {isSignUp ? 'Sign Up' : 'Sign In'}
                </motion.button>
              </form>
              <div className="mt-4 space-y-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 rounded-full bg-[#4285F4] text-white font-bold flex items-center justify-center"
                  onClick={(e) => {onGoogleSignIn(e)}}
                >
                  <FaGoogle className="mr-2" /> Continue with Google
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 rounded-full bg-[#3b5998] text-white font-bold flex items-center justify-center"
                >
                  <FaFacebook className="mr-2" /> Continue with Facebook
                </motion.button>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-[#05be9e] hover:underline font-semibold"
                >
                  {isSignUp ? 'Already have an account? Sign In' : 'New here? Create an account'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LoginSignup;