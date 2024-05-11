import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    const { googleLogin, githubLogin } = useContext(AuthContext)
    return (
        <div className=" ">
            <h1 className="text-center mb-3 text-sm">--------Or countinue with---------</h1>
            <div className="flex justify-center">
                <button className=" w-3/4 rounded-full btn btn-outline" onClick={() => googleLogin()}>
                    <FaGoogle/>
                    Google</button>
            </div>
            <div className="flex justify-center mt-2">

                <button className="w-3/4 rounded-full btn btn-outline" onClick={() => githubLogin()}>
                   <FaGithub/>
                    Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;