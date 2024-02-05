import {Link} from 'react-router-dom';
import '../App.css'
export default function NavBar(){
    return(
        <div className='nav'>
            <h1>Welcome to My Portfolio</h1>
            <ul>
                <li><Link to='/about'>About Me</Link></li>
                <li><Link to='/academic'>Academic details</Link></li>
                <li><Link to='/projects'>My Projects</Link></li>
            </ul>
        </div>
    );
}