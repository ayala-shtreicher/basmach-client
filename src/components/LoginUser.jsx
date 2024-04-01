import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/userContext'
import { loginUser } from '../APICalls/user.API'
import { useNavigate } from 'react-router-dom'
// import '../css/YourComponent.css';


export default function LoginUser() {
    const { userLogin, setLogin } = useContext(userContext)
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value }
        setData({ ...data, ...inputs })
    }

    const login = async (e) => {
        e.preventDefault();
        const { token, user } = await loginUser(data);
        console.log(token, user);
        localStorage.setItem("tokenUser", token)

        setLogin(user);
    }
    useEffect(() => {
        console.log(userLogin);
        if (userLogin?.email) {
            navigate('/listResort');
        }
    }, [userLogin])

    const signUp = async (e) => {
        e.preventDefault();
        navigate('/signUpUser')
    }
    const style = {
        width: '25rem',
    };

    return (
        <>
            <div
                className='d-flex justify-content-evenly'
            >
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <div className="App-header card" style={{ width: "25rem" }}>
                        <div className='list-group list-group-flush'>
                            <input
                                placeholder="Email"
                                name="email"
                                type="email"
                                className="input-fields list-group-item m-3"
                                onChange={event => handleInputs(event)}
                            />
                            <input
                                placeholder="Password"
                                name="password"
                                type="password"
                                className="input-fields list-group-item m-3"
                                onChange={event => handleInputs(event)}
                            />
                            <button className="btn btn-secondary btn-lg btn-block text-info m-3" onClick={login}>Log In User</button>
                            <button className="btn btn-secondary btn-lg btn-block text-info m-3" onClick={signUp}>Sign Up User</button>
                        </div>
                    </div>
                </div>
                {/* 
            <div class="overlay">
                <div class="success" id="message"> </div>
                <div class="login">
                    <div id="tabs">
                        <ul class="tabs">
                            <li><a href="#login" onClick={login}>Login</a></li>
                            <li><a href="#signup" onClick={signUp}>Sign up</a></li>
                        </ul>
                        <div id="login">
                            <form id="loginForm" method="POST">
                                <input type="text" placeholder="Email" name="email" required onChange={event => handleInputs(event)}/>
                                <input type="password" placeholder="Password" name="password" required onChange={event => handleInputs(event)} />
                                <input type="submit" value="Login" class="button" />
                            </form>
                        </div>
                        </div>
                        </div>
                        </div> */}
            </div>
        </>
    )
}
