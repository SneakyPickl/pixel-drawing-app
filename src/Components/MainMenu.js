import '../CSS/MainMenu.css'
import React, { useContext,useState } from 'react'
import { AppContext } from '../Helpers/Contexts';



function MainMenu() {
     const { setAppState } = useContext(AppContext);
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: 'user1',
            password: 'pass1'
        }, 
        {
            username: 'user2',
            password: 'pass2'
        }
    ];

    const loginErrors = {
        uname: 'invalid username',
        pass: 'invalid password'
    }

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value)
            {
                // Invalid password
                setErrorMessages({ name: 'pass', message: loginErrors.pass });
            }
            else {
                setIsSubmitted(true);
            }
        }
        else {
            // Username not found
            setErrorMessages({ name: 'uname', message: loginErrors.uname });
        }
    }

    const renderErrorMessage = (name) => 
        name === errorMessages.name && (
            <div className='error'>{ errorMessages.message }</div>
        );
    
    // JSX code for login form
    const renderForm = (
        <div className='form'>
            <form onSubmit={ handleSubmit }>
                <div className='input-container'>
                    <label>UserName</label>
                    <input type='text' name='uname' required />
                    { renderErrorMessage('uname') }
                </div>
                <div className='input-container'>
                    <label>Password</label>
                    <input type='password' name='pass' required />
                    { renderErrorMessage('pass') }
                </div>
                <div className='button-container'>
                    <input type='submit' />
                </div>
            </form>
        </div>
    )

    return (
        <div className='mainMenu'>
            <div className='login-form'>
                <div className='title'>Sign In</div>
                { isSubmitted ? setAppState('canvas') : renderForm }
            </div>
        </div>
    )
}

export default MainMenu