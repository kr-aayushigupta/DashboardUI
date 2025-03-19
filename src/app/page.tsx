

import Link from "next/link";

const Home = () =>{
  return ( 
    <div className="h-full flex items-center justify-center ">
     
     {/* <div className='flex justify-center items-center gap-8 bg-slate-100 min-h-80 min-w-100 rounded-lg shadow-blue-500 shadow-2xl border-2 border-blue-500'>
          
          <button className="text-white text-xl shadow-black shadow-md px-4 py-2 bg-blue-500 rounded-md transition duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-500 ">
            <Link href="/sign-up">Sign-up</Link>
           
          </button>
          <button className="text-white text-xl shadow-black shadow-md px-4 py-2 bg-blue-500 rounded-md transition duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-gradient-to-l from-blue-700 via-sky-500 to-cyan-500 ">
            <Link href="/sign-in">Login</Link>
          </button>
        </div> */}
        <div className="" >
          <h1 className="bg-clip-text text-transparent text-4xl w-full  font-extrabold bg-gradient-to-r from-purple-500 to-pink-500">Welcome , Let's Get Started</h1>
          
        </div>
    </div>
  );
}

export default Home;