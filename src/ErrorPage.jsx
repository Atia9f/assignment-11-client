import { Link, useRouteError } from "react-router-dom";
import not from './assets/What-is-404-error.webp'
import { FaArrowRight } from "react-icons/fa";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center" id="error-page">
      <img className="w-1/2 mx-auto" src={not} alt="" />
      
        <Link  className="btn mt-10 bg-green-800 text-white" to="/">Go Back<FaArrowRight/>
        </Link>
    </div>
  );
}