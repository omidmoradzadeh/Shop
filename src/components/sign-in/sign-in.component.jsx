import React from 'react';
import FormInput from '../form-input/forminput.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.util';
import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    handelSubmit = (event) => {
        event.ppreventDefault();
        this.setState({ email: '', password: '' });
    }

    handelChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I have already an account</h2>
                <span>Sign in wth your email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput
                        name='email'
                        value={this.state.email}
                        handelChange={this.handelChange}
                        label='email'
                        required />

                    <FormInput
                        name='password'
                        value={this.state.password}
                        handelChange={this.handelChange}
                        label='password'
                        required />

                    <div className='buttons'>

                        <CustomButton type='submit' >Submit Form</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> {' '}Sign in with Google {' '}</CustomButton>
                    </div>

                </form>
            </div>
        );
    };
}
export default SignIn;