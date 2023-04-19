import { useEffect, useState } from 'react'
import { login } from '../../features/auth/authSlice'
import Spinner from '../../components/Spinner'
import './Login.css'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth)

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if (isSuccess || user) {
            navigate('/profile')
        }

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit= (e) => {
        e.preventDefault()

        const userData = {
            email, 
            password
        }

        dispatch(login(userData))
    }

    if (isLoading) {
        return <Spinner />
    }

        return (
            <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={onSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor='email'>Email</label>
                        <input
                            type="text"
                            id="email"
                            name='email'
                            value={email}
                            onChange={onChange}
                            autoComplete='off'
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor='passeword'>Password</label>
                        <input
                            type="password"
                            id="password"
                            name='password'
                            value={password}
                            onChange={onChange}
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
        </main>)
}

export default Login