import Head from 'next/head';
import LoginForm from './LoginForm';




const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-yellow-400 via-purple-400 via-teal-600 to-pink-200">
      <Head>
        <title>Login</title>
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <LoginForm/>
      </div>
    </div>
  );
}
export default Login
