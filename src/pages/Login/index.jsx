import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/auth/auth.slice'
import { useLoginMutation } from '../../features/auth/auth.api.slice'
import Spinner from '../../components/Spinner'
import './Login.css'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [login, { isLoading }] = useLoginMutation()

    const handleSubmit = async (e) => {
        e.preventDefault()
            const userData = await login({ email, password }).unwrap()
            dispatch(setCredentials({ ...userData }))
            navigate('/profile')
    }

    const handleEmailInput = (e) => setEmail(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)

    const content = isLoading ? <Spinner /> : (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form name='sign-in-form' onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor='email'>Email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={handleEmailInput}
                            autoComplete='off'
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor='passeword'>Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordInput}
                            required
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button
                        className="sign-in-button"
                        type='submit'
                    >
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    )

    return content
}

export default Login