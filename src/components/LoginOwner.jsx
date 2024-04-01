import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/userContext'
import { loginOwner } from '../APICalls/user.API'
import { useNavigate } from 'react-router-dom'


export default function LoginOwner() {
    const { userLogin,setLogin } = useContext(userContext)
    const navigate = useNavigate()

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value }
        setData({ ...data, ...inputs })
    }

    const signUp = async (e) => {
        e.preventDefault();
        navigate('/signUpOwner')
    }
    const login = async (e) => {
        e.preventDefault();
        const { token, owner } = await loginOwner(data);
        console.log(token, owner);
        localStorage.setItem("tokenUser", token)
        setLogin(owner);
    }
    useEffect(() => {
        console.log(userLogin);
        if (userLogin?.email) {
            navigate('/owner');
        }

    }, [userLogin])


    return (
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
                    <button className="btn btn-secondary btn-lg btn-block text-info m-3" onClick={login}>Log In Owner</button>
                    <button className="btn btn-secondary btn-lg btn-block text-info m-3" onClick={signUp}>Sign Up owner</button>

                </div>
            </div>
        </div>
        </div>
    )
}
