'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'




const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const formSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()

        if(email ===""){ return toast("EMail is required")}
        if(password ===""){return  toast("Password is required")}

        console.log({ email, password })
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input onChange={(e) => { setEmail(e.target.value) }}
                    value={email}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input onChange={(e) => { setPassword(e.target.value) }}
                    value={password}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <div className="flex items-center justify-between">
            <button
    className="bg-orange-300 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit"
>
                    Sign In
                </button>
                <Link href="/" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >Forgot Password?</Link>
            </div>
        </form>)
}

export default LoginForm