import './App.css';

function Login (){
    return (
    <div className='Login'>
        <h1 align="center">Get <span class="rich">RICH</span>, Be with <span class="us">ME</span></h1>
        <form autocomplete="off" align="center">
            <label for="Username">Username:</label>
            <input name="name" type="text" placeholder="E-mail@example.com" required autofocus/><br/>
            <label for="Password">Password:</label>
            <input name="Password" type="Password" placeholder="********" required autofocus/><br/>
            <label for="Phone #">Phone No:</label>
            <input id="tel" name="Phone #" type="tel" placeholder="000.000.0000" maxlength="11" required autofocus/><br />
            <input type="submit" value="Login/SignUp" class="submit"/> 
            </form>
    </div>
    );
}

export default Login;