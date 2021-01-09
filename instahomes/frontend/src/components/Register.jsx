import React, {useState} from "react";
import { signup } from '../actions/auth';
import { connect } from 'react-redux';
function Register({ signup, isAuthenticated }){
    
    const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        username:'',
        email:'',
        password:'',
        password2:''
    });

    const { first_name, last_name, username, email, password, password2 } = formData

    const onChange = e => setFormData(
        { ...formData, [e.target.name]: e.target.value}
    )
    const onSubmit = e => {
        e.preventDefault();
        console.log(first_name, last_name, email, password, password2)
        signup(first_name, last_name, email, password, password2)
    }
    return(
    <section id="register" class="bg-light py-5">
        <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto">
            <div class="card">
                <div class="card-header bg-primary text-white">
                <h4>
                    <i class="fas fa-user-plus"></i> Register</h4>
                </div>
                <div class="card-body">
                <form onSubmit={e => onSubmit(e)}>
                    <div class="form-group">
                        <label for="first_name">First Name</label>
                        <input type="text" name="first_name" class="form-control" onChange={onChange} required/>
                    </div>
                    <div class="form-group">
                        <label for="last_name">Last Name</label>
                        <input type="text" name="last_name" class="form-control" onChange={onChange} required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" class="form-control" onChange={onChange} required/>
                    </div>
                    <div class="form-group">
                        <label for="password2">Password</label>
                        <input type="password" name="password" class="form-control"  onChange={onChange} required/>
                    </div>
                        <div class="form-group">
                        <label for="password">Confirm Password</label>
                        <input type="password" name="password2" class="form-control" onChange={onChange} required/>
                    </div>
                    <input type="submit" value="Register" class="btn btn-secondary btn-block"/>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Register);