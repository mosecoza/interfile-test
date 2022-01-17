import React, { useState, useEffect } from 'react'

import { login, useLoggedIn } from './bookmark.js'

export default function Login () {
  const loggedIn = useLoggedIn()
  const [showLogin, setShowLogin] = useState(false)
  const [user, setUser] = useState({})

  const [username, setUsername] = useState('sally@mail.com')
  const [password, setPassword] = useState('qwertyui123')

  async function handleLogin () {
    const res = await login(username, password)
    setUser(res.user)
    setShowLogin(false)
  }
  useEffect(() => {
    console.log('useEffect user: ', user)
  }, [user])

  return (
    <>
      <div>
        {loggedIn ? (
          <div className='flex justify-around my-2 text-yellow-700 screen'>
            <span>{user.name}</span>
          </div>
        ) : (
          <span onClick={() => setShowLogin(!showLogin)}>
            <button className='px-6 py-1 text-2xl text-white bg-yellow-600 ri-fingerprint-line'>
              Login
            </button>
          </span>
        )}
      </div>
      {showLogin && (
        <div
        className='fixed inset-0 z-10 overflow-y-auto'
        role='dialog'
        aria-modal='true'
      >
        <div className='flex min-h-screen text-center md:block md:px-2 lg:px-4'>
          <div
            className='fixed inset-0 hidden transition-opacity bg-gray-500 bg-opacity-75 md:block'
            aria-hidden='true'
          ></div>

          <span
            className='hidden md:inline-block md:align-middle md:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>

          <div className='flex w-full text-base text-left transition transform md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl'>
            <div className='relative flex items-center w-full px-4 pb-8 overflow-hidden bg-white shadow-2xl pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
              <button
                type='button'
                className='absolute text-gray-400 top-4 right-4 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8'
              >
                <span className='sr-only'>Close</span>
              </button>

              <div className='grid items-start w-full grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8'>
                <div className='sm:col-span-12 lg:col-span-12'>
                  <h2 className='text-2xl font-extrabold text-gray-900 sm:pr-12'>
                    Login
                  </h2>
                  <section
                    aria-labelledby='options-heading'
                    className='mt-10'
                  >
                    <input
                      type='text'
                      placeholder='User Name'
                      value={username}
                      onChange={evt => setUsername(evt.target.value)}
                      className='w-full p-2 text-sm border border-gray-400 rounded-md'
                    />
                    <input
                      type='password'
                      value={password}
                      onChange={evt => setPassword(evt.target.value)}
                      className='w-full p-2 mt-3 text-sm border border-gray-400 rounded-md'
                    />
                    <button  onClick={() => handleLogin()} className="px-3 py-1 mt-5 text-sm text-white bg-yellow-700 rounded-md ri-fingerprint-line" type="submit">
                    Login</button>
                    
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}
