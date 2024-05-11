import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "../../socialLogin/SocialLogin";
import { FaEye , FaEyeSlash} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setPassword] = useState(false);
  

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        const { email, password, name, photo } = data;
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo).then(() => {
                    toast.success('Successfully Create Account');
                });
            })
            .catch(error => {
                console.log(error)
            })

    };



    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            {/* <Nav></Nav> */}
            <div className=" ">
                <div className="hero-content ">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h2 className="font-bold">Create an account</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered"
                                    {...register("name", { required: true })}
                                />
                            </div>
                            {errors.name && <span className="text-red-500">This field is required</span>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo" className="input input-bordered"
                                    {...register("photo", { required: true })}

                                />
                            </div>
                            {errors.photo && <span className="text-red-500">This field is required</span>}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex justify-start items-center">
                                    <input type={showPassword? "text" :"password"} placeholder="password" className="input input-bordered" name="password"
                                        {...register("password", {
                                            required: true,
                                            pattern: { value: passwordRegex }
                                        })}

                                    />
                                    <span className="-ml-5" onClick={()=>setPassword(!showPassword)}>
                                    {
                                        showPassword?  <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
                                    }
                                    </span>
                                </div>
                                {errors.password && <span className="text-red-500">Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long</span>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#F9A51A]">Register</button>
                            </div>
                        </form>
                        <p className="text-center mb-3">Already have an account? <Link className="text-blue font-bold" to="/login">Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;