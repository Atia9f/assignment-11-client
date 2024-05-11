import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "../../socialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { singIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        singIn(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Login Successfully');
               navigate(location?.state? location.state : "/" )
            })
            .catch(error => {
                console.log(error)
                toast.warning('Not match');
            })
    }


    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            {/* <Nav></Nav> */}
            <div className=" ">

                <div className="hero-content ">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                        <h2 className="font-bold">Please login</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center mb-3">Do not have an account? <Link className="text-blue font-bold" to="/register">Register</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;