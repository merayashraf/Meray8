import { Link } from "react-router-dom";
function Login() {
    return (<>
        <h1 className="text-Primary">Login Form</h1>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="userEmail"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    id="exampleInputPassword"
                    name="Password"
                    className="form-control"
                />
            </div>
            <button
            type="submit"
            className="btn btn-primary"
            >
            Login
            </button>
        </form>
        <div>
                <p>You dont have acount yet!{" "}
                    <Link className="btn btn-success btn-sm" to={"/join/signup"}>SignUp</Link>
                </p>
        </div>
    </>);
}

export default Login;