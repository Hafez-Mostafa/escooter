'use client'

import Link from "next/link";
interface ErrorPageProps{
    error:Error; reset:()=>void;
}
const ErrorPage = ({error,reset}:ErrorPageProps) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-10 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Oops!</h1>
                <p className="text-gray-600 mb-6">Something went wrong.</p>
               <h2 className='text-grey-700 my-3 text-xl'>
                Error Message: {error.message}
               </h2 >
               <h2 onClick={()=>reset()} className="cursor-pointer rounded-full py-2 font-bold bg-blue-500 hover:gb-blue-700 text-white">
                Try again
               </h2>
                <Link href="/"className="text-blue-500 hover:text-blue-700 transition duration-300">Go to Home Page</Link>
            </div>
        </div>
    );
}

export default ErrorPage;
