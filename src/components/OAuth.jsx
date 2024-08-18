import React from "react";
import { FcGoogle } from "react-icons/fc"

const OAuth = () => {
    return <button className="flex justify-center items-center w-full bg-red-700 px-7 py-3 uppercase text-white text-sm font-medium hover:bg-red-800
     active:bg-red-900 shadow-md hover:shadow-lg 
     active:shadow-lg transition duration-150 ease-in-out rounded">
        <FcGoogle className="text-xl bg-white rounded-full mr-2" />Continue with Google
    </button>
};

export default OAuth;
