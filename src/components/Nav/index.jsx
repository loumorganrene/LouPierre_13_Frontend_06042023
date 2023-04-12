import argentBankLogo from '../../assets/img/argentBankLogo.png'
import '../Nav/Nav.css'

function Nav() {

  return (
      <nav className="main-nav">
          <a className="main-nav-logo" href="./">
              <img
                  className="main-nav-logo-image"
                  src={argentBankLogo}
                  alt="Argent Bank Logo"
              />
              <h1 className="sr-only">Argent Bank</h1>
          </a>
          <div>
              <a className="main-nav-item" href="./sign-in">
                  <i className="fa fa-user-circle"></i>
                  Sign In
              </a>
          </div>
      </nav>
  )
}

export default Nav