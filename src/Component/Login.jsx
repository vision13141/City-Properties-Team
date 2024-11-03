import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ className }) => {

    const auth = getAuth();

    let navigate = useNavigate();

    const [data, setdata] = useState({
        email: "",
        pass: "",
    })


    const login = (e) => {
        e.preventDefault()

        const { email, pass } = data

        signInWithEmailAndPassword(auth, email, pass)
            .then((res) => {
                const user = res.user;
                navigate(`/home`)
            })
            .catch((error) => {
                alert(error.message)
            });

    }
    return (
        <div className={`${className} mt-[3vw]`}>
            <div className="min-h-1/4 flex items-center justify-center bg-[#f3f3f4] py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
                    <div>
                        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
                            Welcome Back
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Log in to your account
                        </p>
                    </div>

                    <form onSubmit={login} className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />

                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input onChange={(e) => setdata((prev) => ({ ...prev, email: e.target.value }))} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md sm:text-sm" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input onChange={(e) => setdata((prev) => ({ ...prev, pass: e.target.value }))} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md sm:text-sm" placeholder="Password" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" required type="checkbox" className="h-4 w-4 text-purple-600 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-sky-600">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out">
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="mt-2 text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link to={`/singUp`} className="font-medium text-sky-600">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login