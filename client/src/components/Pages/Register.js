import React, { useState } from "react";
const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label><br></br>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="User's Full Name"/><br></br>
            <label htmlFor="email">Email</label><br></br>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" id="email" name="email" /><br></br>
            <label htmlFor="password">Password</label><br></br>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" /><br></br>
            <button type="submit">Sign Up</button><br></br>
        
        <button className="link-btn" onClick={()=> props.onFormSwitch('login')}>Already have an account? Login here</button>
        </form>
        </div>
    )
}
export default Register;