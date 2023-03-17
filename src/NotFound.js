import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2 className="not">Sorry</h2>
            <p className="cannot">That page cannot be found</p>
            <Link to='/'>Back to the homepge...</Link>
        </div>
    );
}
 
export default NotFound;