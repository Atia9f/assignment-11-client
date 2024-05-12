import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    const { googleLogin, githubLogin } = useContext(AuthContext)
    return (
        <div className=" ">
            <h1 className="text-center mb-3 text-sm">Or Login with social accounts</h1>
            <div className="flex justify-center items-center">
            <div className="flex justify-center">
                <button className=" w-3/4 rounded-full btn" onClick={() => googleLogin()}>
                    <FaGoogle/>
                    Google</button>
            </div>
            <div className="flex justify-center ">

                <button className="w-3/4 rounded-full btn" onClick={() => githubLogin()}>
                   <FaGithub/>
                    Github</button>
            </div>
            </div>
        </div>
    );
};

export default SocialLogin;