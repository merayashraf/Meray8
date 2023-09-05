import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigateToPage = useNavigate()
    const handleNavigate=()=>{
        navigateToPage("/")
    }
    return (<>
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 classNameName="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <button className="btn btn-primary" onClick={()=>{handleNavigate()}}>Go Home</button>
            </div>
        </div>
    </>);
}

export default NotFound;