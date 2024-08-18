import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";


const ForgotPassword = () => {
    const [email, setEmail] = useState("")


    const onChange = (e) => {
        setEmail(e.target.value)
    }

    return <section>
        <h1 className="text-center text-3xl font-bold mt-6">Forgot Password</h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
            <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
                <img src="https://images.unsplash.com/photo-1609770231080-e321deccc34c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtleXxlbnwwfHwwfHx8MA%3D%3D" alt="image key"
                    className="w-full size-[500px] rounded-2xl" />
            </div>
            <div className="w-full md:w-[67% lg:w-[40%] lg:ml-20" >
                <form >
                    <input type="email" id="email" value={email} onChange={onChange} placeholder="Email address" className="w-full px-4 py-2 text-xl text-gray-700 border-gray-300 rounded transition ease-in-out mb-6" />

                    <div className="flex justify-between text-sm sm:text-lg whitespace-nowrap">
                        <p className="mb-6 text-[22px]">
                            Don't have an account?<Link to="/sign-up" className="cursor-pointer text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1 text-[22px]">Register</Link></p>
                        <Link to="/sign-in" className="cursor-pointer text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out text-[22px]">Sign in instead</Link>
                    </div>
                    <button className="w-full bg-blue-600 text-white px-7 py-2 text-sm uppercase rounded font-medium shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" >Send reset password</button>
                    <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                        <p>OR</p>
                    </div>
                    <OAuth />
                </form>
            </div>
        </div>

    </section>;
};

export default ForgotPassword;
