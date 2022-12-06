import React, { useState } from "react";

 const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label><br></br>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" id="email" name="email" /><br></br>
            <label htmlFor="password">Password</label><br></br>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" /><br></br>
            <button type="submit">Log In</button><br></br>
        
        <button className="link-btn" onClick={()=> props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </form>
        </div>
    )
}
export default Login;