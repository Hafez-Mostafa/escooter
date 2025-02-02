import Link from 'next/link'

 const  NotFoundPage=()=> {
  return (
    <div className="fix-height min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-8">404</h1>
      <p className="text-lg text-gray-700 font-semibold mb-8">
      Oops! The page you're looking for doesn't exist.
      </p>
      
      <div className="w-full h-34 mt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-animation background-animation flex items-center justify-center text-center"
>
      <Link href="/" className="px-6 font-bold py-3 bg-primary text-white text-center rounded-full hover:bg-secondary transition duration-300">

          Go back home
       
      </Link>
      </div>
    </div>
  )
}
export default NotFoundPage