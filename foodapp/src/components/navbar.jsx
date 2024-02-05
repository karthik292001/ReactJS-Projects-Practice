import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <h1>Food for you</h1>
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/pizza'>pizza</Link> </li>
                <li> <Link to='/burger'>burger</Link> </li>
                <li> <Link to='/pasta'>pasta</Link> </li>
            </ul>
        </div>
    );
}