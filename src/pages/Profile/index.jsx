import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetDetailsQuery, useEditDetailsMutation } from '../../features/user/user.api.slice'
import '../Profile/Profile.css'

function Profile() {

    const { data, error, isLoading, isFetching, isSuccess } = useGetDetailsQuery()

    // const [editDetails, { isLoading: loadingEditedDetails }] = useEditDetailsMutation()

    // const [firstName, setFirstName] = useState(data.body.firstName)
    // const [lastName, setLastName] = useState(data.body.lastName)

    // const navigate = useNavigate()

    // const [isEditing, setIsEditing] = useState(false)
    // const onFirstnameChanged = (e) => setFirstName(e.target.value)
    // const onLastnameChanged = (e) => setLastName(e.target.value)

    // const onSaveDetailsClicked = async () => {
    //     if (firstName && lastName) {
    //         await editDetails({ firstName, lastName })
    //         navigate.push('/profile')
    //     }
    // }

    return (<main className="main bg-dark">

        {isLoading && <h1>...Loading</h1>}
        {isFetching && <h1>...Fetching</h1>}
        {error && <h1>Oops! Something went wrong</h1>}
        {isSuccess && (<><div className="header">
            <h1>Welcome back<br />{data.body.firstName}</h1>
            {/* {!isEditing ? (<button
                id="edit-name"
                className="edit-button"
                onClick={() => setIsEditing(true)}>
                Edit Name
            </button>) : (<>
                <form className='edit-username-form' onSubmit={onSaveDetailsClicked}>
                    <div className="input-wrapper">
                        <label htmlFor='firstName'></label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={onFirstnameChanged}
                            disabled={isLoading}
                            autoComplete='off'
                            required
                        />

                        <label htmlFor='lastName'></label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={onLastnameChanged}
                            disabled={isLoading}
                            autoComplete='off'
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
                </form>
            </>)} */}
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
        </>
        )}
    </main>)
}

export default Profile