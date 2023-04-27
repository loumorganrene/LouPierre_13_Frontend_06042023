import { useState } from 'react'
import { useGetDetailsQuery } from '../../features/user/user.api.slice'
import '../Profile/Profile.css'

function Profile() {
    const [newFirstname, setNewFirstname] = useState(null)
    const [newLastname, setNewLastname] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    const { data, isFetching, isLoading } = useGetDetailsQuery()

    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>Missing details</div>

    const firstName = data.body.firstName
    const lastName = data.body.lastName

    const handleChangeName = (e) => {
        e.preventDefault()
    }

    const handleFirstnameInput = (e) => setNewFirstname(e.target.value)
    const handleLastnameInput = (e) => setNewLastname(e.target.value)


    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{isFetching ? '...refetching' : `${firstName}`}</h1>
                {!isEditing ? (<button
                    id="edit-name"
                    className="edit-button"
                    onClick={() => setIsEditing(true)}>
                    Edit Name
                </button>) : (<><form className='edit-username-form' onSubmit={handleChangeName}>
                    <div className="input-wrapper">
                        <label htmlFor='firstName'></label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={handleFirstnameInput}
                            autoComplete='off'
                            required
                        />

                        <label htmlFor='lastName'></label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={handleLastnameInput}
                            required
                        />
                    </div>

                    <div className="button-wrapper">
                        <button
                            className="edit-button"
                            style={{ marginRight: '10px', width: '100px' }}
                            type='submit'
                        >
                            Save
                        </button>
                        <button
                            className="edit-button"
                            style={{ marginLeft: '10px', width: '100px' }}
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form></>)}
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