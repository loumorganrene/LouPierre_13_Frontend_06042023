import { useGetDetailsQuery } from '../../features/user/user.api.slice'
import '../Profile/Profile.css'

function Profile() {

    const { data, isFetching, isLoading } = useGetDetailsQuery()

    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>Missing details</div>

  return (
      <main className="main bg-dark">
          <div className="header">
              <h1>Welcome back<br />{isFetching ? '...refetching' : `${data.body.firstName}`}</h1>
              <button className="edit-button" onClick={ () =>{}} >Edit Name</button>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
              <div className="account-content-wrapper">
                  <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                  <p className="account-amount">$2,082.79</p>
                  <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                  <button className="transaction-button">View transactions</button>
              </div>
          </section>
          <section className="account">
              <div className="account-content-wrapper">
                  <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                  <p className="account-amount">$10,928.42</p>
                  <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                  <button className="transaction-button">View transactions</button>
              </div>
          </section>
          <section className="account">
              <div className="account-content-wrapper">
                  <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                  <p className="account-amount">$184.30</p>
                  <p className="account-amount-description">Current Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                  <button className="transaction-button">View transactions</button>
              </div>
          </section>
      </main>
  )
}

export default Profile