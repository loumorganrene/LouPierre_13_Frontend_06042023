import argentBankLogo from '../../assets/img/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../features/auth/auth.slice'
import '../Nav/Nav.css'

function Nav() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <nav className="main-nav">
            <Link to='/' className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {token
                    ? (<>
                        <Link to='/profile' className="main-nav-item">
                            <i className="fa fa-user-circle"></i>Tony
                        </Link>
                        <Link to="/"
                            className="main-nav-item"
                            onClick={onLogout}
                        >
                            <i className="fa fa-sign-out"></i>Sign Out
                        </Link></>)
                    : (<Link
                        to="/login"
                        className="main-nav-item"
                    >
                        <i className="fa fa-user-circle"></i>Sign In
                    </Link>)
                }

            </div >
        </nav >
    )
}

export default Nav