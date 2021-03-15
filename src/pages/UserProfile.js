import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import selectors from '../redux/selectors'

const UserProfile = ({ isAuthenticated, user }) => {
    const history = useHistory();

    useEffect(() => {
        if (!isAuthenticated) {
            history.push('/login');
        }
    }, [isAuthenticated])

    return (
        <>
            {isAuthenticated && (
                <div>
                    <Alert variant="info">
                        <Alert.Heading>
                            Welcome back, {' '}
                            <span style={{ color: 'black' }}>{user.slice(0, 5)}</span>
                        </Alert.Heading>
                        <p>You successfully logged in 👏</p>
                    </Alert>
                </div>
            )}
        </>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: selectors.getAuth(state),
    user: selectors.getUser(state),
});

export default connect(mapStateToProps, null)(UserProfile);
