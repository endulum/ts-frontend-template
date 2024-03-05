import { Link } from 'react-router-dom'

export default function Login (): JSX.Element {
  return (
    <>
      <div className="auth-form">
        <h2>Log In</h2>
        <form>
          <label htmlFor="username">
            <span>Username</span>
            <input type="text" id="username" />
          </label>

          <label htmlFor="password">
            <span>Password</span>
            <input type="password" id="password" />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Link to="/signup">Sign up</Link>
    </>
  )
}
