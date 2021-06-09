import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import {Input, Button} from '../InputField/InputField'

import './SignIn.scss';
import './SignInMedia.scss';

export const SignIn = () =>{
    const onSubmit = (e) => {
        e.PreventDefault();
    }
    return (
            <section className='sign-up sign-in' style={{background: `url(${process.env.PUBLIC_URL}/images/sign-up-bg.png) center center`}}>
                <section className="sign-up__wrapper wrapper">
                <section className="sign-up__description">
                    <h1 className="sign-up__company-name"><NavLink to='/'>RAKU<span className="sign-up__company-name--color">TECH</span></NavLink></h1>
                    <p className="sign-up__company-desc">Browse from over 500 devices in your area.</p>
                </section>
                <Router>
                    <section className="sign-up__section">
                    <Route path='/signup'>
                        <header className="sign-up__header">
                            <h2 className="sign-up__header--title sign-in__header--title">Sign Up</h2>
                            <span className="sign-up__header--text">Already have an account? <NavLink to='/login' className='sign-up__header--link'>Log in</NavLink></span>
                        </header>
                    </Route>
                    <Route path="/login">
                        <header className="sign-up__header">
                            <h2 className="sign-up__header--title sign-in__header--title">Sign In</h2>
                            <span className="sign-in__btn sign-in__btn--apple"><i className="fab fa-apple"></i>Sign In With Apple</span>
                            <span className="sign-in__btn sign-in__btn--facebook"><i className="fab fa-facebook-square"></i>Sign In With Facebook</span>
                        </header>
                         <span className="sign-in__separate">OR</span>
                    </Route>
                    <section className="sign-up__form">
                            <form id='login-submit' onSubmit={onSubmit}>
                                <Route path='/signup'>
                                    <Input field={{_uid: 'fullName_', label: 'Full Name' }} type='text' required='required'></Input>
                                </Route>

                                <Input field={{_uid: 'email_', label: 'Email' }} type='email' required='required'></Input>
                                <Input field={{_uid: 'pass_', label: 'Password' }} type='password' required='required' placeholder='Must be at least 6 characters'></Input>
                                
                                <Route path='/login'>
                                    <Button type='submit' value='Sign In'></Button>
                                </Route>

                                <Route path='/signup'>
                                    <Input field={{_uid: 'checkbox_', label: 'Sign up for email updates' }} type='checkbox' className='sign-up__chkbox-label'></Input>
                                    <Button type='submit' value='Sign Up'></Button>
                                </Route>
                             </form>
                    </section>
                    <footer className="sign-up__footer">
                        <span className="sign-up__footer--text">By continuing, you agree to accept our Privacy Policy & Terms of Service.</span>
                        <Route path='/login'>
                            <span className="sign-up__footer--text sign-up__footer__create-acc">Don't have an account? <NavLink to='/signup'>Create new account</NavLink></span>
                        </Route>
                    </footer>
                    </section>
                 </Router>
                </section>
            </section>
    )
}