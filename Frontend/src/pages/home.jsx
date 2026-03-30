import { Link } from "react-router-dom";
import LogIn from "./login";

export default function Home(){
    return (
        <div className='w-fill h-creen bg-red flex flex-col justify-center items-center'>
            <h2>Gift Lovers</h2>

             <p className="color-red">
                This is a paragraph in React. You can write any text here just like in HTML.
            </p>

             <Link to={"/login"}><span className="underline cursor-pointer">login</span></Link>
             <Link to={"/signup"}><span className="underline cursor-pointer">Sign up</span></Link>
          
        </div>
    )
}