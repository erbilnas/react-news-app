import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import services from '../redux/services'
import selectors from '../redux/selectors'

const LoginPage = ({ isAuthenticated, isError, login }) => {
    const { register, handleSubmit, errors } = useForm()
    const history = useHistory()

    const onSubmit = async (data, e) => {
        login(data.Email, data.Password)
        e.target.reset()
    };

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/profile')
        }
    }, [isAuthenticated])

    return (
        <>
            {isAuthenticated
                ? (<h2 style={{ textAlign: 'center' }}>LOGGED IN SUCCESSFULLY</h2>)
                : (
                    <div className="form-container">
                        {isError !== null && (<p style={{ color: 'red' }}>The e-mail or password incorrect!</p>)}
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Form.Label>*E-mail</Form.Label>
                                {errors.Email && (<span style={{ color: 'red', marginLeft: '10px' }}>Required field</span>)}
                                <Form.Control
                                    type="mail"
                                    placeholder="Enter your e-mail"
                                    name="Email"
                                    ref={register({ required: true, maxLength: 30 })}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>*Password</Form.Label>
                                {errors.Password && (<span style={{ color: 'red', marginLeft: '10px' }}>Required field</span>)}
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    name="Password"
                                    ref={register({ required: true, maxLength: 15 })}
                                />
                            </Form.Group>
                            <Button variant="info" type="submit">LOG IN</Button>
                        </Form>
                    </div>
                )}
        </>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: selectors.getAuth(state),
    isError: selectors.getError(state),
});

const mapDispatchToProps = {
    login: services.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
