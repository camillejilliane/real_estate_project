import React, {useState} from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';

function Login({ login }){
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const { email, password } = formData

    const onChange = e => setFormData(
            { ...formData, [e.target.name]: e.target.value}
        )
    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    }
    return(
        <section id="login" class="bg-light py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                            <h4>
                                <i class="fas fa-sign-in-alt"></i> Login</h4>
                            </div>
                            <div class="card-body">
                                <form onSubmit={e => onSubmit(e)}>
                                <div class="form-group">
                                <label for="username">Email</label>
                                <input type="email" name="email" class="form-control" onChange={onChange} required/>
                                </div>

                                <div class="form-group">
                                <label for="password2">Password</label>
                                <input type="password" name="password" class="form-control"  onChange={onChange} required/>
                                </div>

                                <input type="submit" value="Login" class="btn btn-secondary btn-block"/>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(null, { login })(Login);