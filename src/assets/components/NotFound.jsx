
import {Link} from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>SORRY NOT FOUND....LOSER</h2>
            <p>page not found or available</p>
            <Link to='/'>Return to home page</Link>

        </div>

     );
}
 
export default NotFound;