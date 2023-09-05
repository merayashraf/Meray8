import { Link } from 'react-router-dom';
function SignUp() {
    return (<>
    <h1 className="text-Primary">SignUp</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputUserName" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUserName"
            name="userName"
          />
        </div>
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
            type="text"
            className="form-control"
            id="exampleInputPassword"
            name="userPassword"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <div>
        <p>
          You already Have an account
          <Link className="btn btn-success btn-sm" to="/join/login">Login</Link>
        </p>
      </div>

    </>);
}

export default SignUp;