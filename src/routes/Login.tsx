import { Link, useLocation } from 'react-router-dom'
import { useState, type Dispatch, type SetStateAction } from 'react'
import APIForm from '../components/APIForm.tsx'
import { type FormErrors } from '../types.ts'

export default function Login ({ setToken }: {
  setToken: Dispatch<SetStateAction<string | null>>
}): JSX.Element {
  const [formErrors, setFormErrors] = useState<FormErrors>([])
  const [formLoading, setFormLoading] = useState<boolean>(false)

  const { state } = useLocation()

  function isError (fieldName: string): boolean {
    return formErrors.some((error) => error.path === fieldName)
  }

  function getError (fieldname: string): string | undefined {
    return formErrors.find((error) => error.path === fieldname)?.msg
  }

  function handleSuccess (data: { token: string }): void {
    setToken(data.token)
  }

  return (
    <>
      <div className="auth-form">
        <h2>Log In</h2>
        <APIForm
          onSuccess={handleSuccess}
          fetchUrl="http://localhost:3000/login"
          fetchMethod="POST"
          handleFormErrors={setFormErrors}
          handleLoading={setFormLoading}
        >
          <label htmlFor="username">
            <span>Username</span>
            <input
              type="text"
              id="username"
              className={isError('username') ? 'error' : ''}
              defaultValue={state?.username}
            />
            {isError('username') && <small>{getError('username')}</small>}
          </label>

          <label htmlFor="password">
            <span>Password</span>
            <input type="password" id="password" className={isError('username') ? 'error' : ''} />
            {isError('password') && <small>{getError('password')}</small>}
          </label>
          <button type="submit" disabled={formLoading}>Submit</button>
        </APIForm>
      </div>
      <Link to="/signup">Sign up</Link>
    </>
  )
}
