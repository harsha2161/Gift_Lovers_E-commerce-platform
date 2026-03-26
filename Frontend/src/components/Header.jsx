 import { Link } from "react-router-dom"
 export default function Header(){
    return (
        

             <div>
                <Link to="/login">login</Link>
                <Link to="/signup">signup</Link>
                 <Link to="/admin">admin</Link>
                <a href="/">home</a>
             </div>

        
    )
 }
