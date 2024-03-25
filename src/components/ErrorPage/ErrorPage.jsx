import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>Page not found.</p>
            <Link to="/"><button className="btn">Go to home</button></Link>
        </div>
    );
};

export default ErrorPage;