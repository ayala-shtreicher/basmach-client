// import React, { useContext, useEffect, useState } from 'react'
// import { userContext } from '../context/userContext'
// import { registerUser } from '../APICalls/user.API'
// import { useNavigate } from 'react-router-dom'

// export default function SignUpUser() {
//     const {userLogin, setLogin } = useContext(userContext)
//     const navigate=useNavigate()
//     const [data, setData] = useState({
//         email: '',
//         password: '',
//         name: '',
//         disabled: '',
//         phone:''
//     })

//     const handleInputs = (event) => {
//         let inputs = { [event.target.name]: event.target.value }
//         setData({ ...data, ...inputs })
//     }


//     const signUp = async (e) => {
//         e.preventDefault();
//         const {token,user}  = await registerUser(data);
//         console.log(token,user);
//         localStorage.setItem("tokenUser", token)
//         setLogin(user);
//     }
//     useEffect(()=>{
//         console.log(userLogin);
//         if (userLogin?.email) {
//             navigate('/listResort');
//         }
    
//        },[userLogin])

//     return (
//         <div className='d-flex justify-content-center align-items-center mt-5'>
//             <div className="App-header card" style={{ width: "25rem" }}>
//                 <div className='list-group list-group-flush'>
//                     <input
//                         placeholder="Email"
//                         name="email"
//                         type="email"
//                         className="input-fields list-group-item m-3"
//                         onChange={event => handleInputs(event)}
//                     />
//                     <input
//                         placeholder="Password"
//                         name="password"
//                         type="password"
//                         className="input-fields list-group-item m-3"
//                         onChange={event => handleInputs(event)}
//                     />
//                     <input
//                         placeholder="Name"
//                         name="name"
//                         type="text"
//                         className="input-fields list-group-item m-3"
//                         onChange={event => handleInputs(event)}
//                     />
//                     <input
//                         placeholder="Phone"
//                         name="phone"
//                         type="tel"
//                         className="input-fields list-group-item m-3"
//                         onChange={event => handleInputs(event)}
//                     />
//                     <select name="disabled" onChange={event =>{ handleInputs(event)
//                     console.log(event);
//                     }}>
//                         <option value="visual">visual</option>
//                         <option value="hearing">hearing</option>
//                         <option value="motor">motor</option>
//                         <option value="mentalHealth">mentalHealth</option>
//                     </select>
//                     <button className="btn btn-secondary btn-lg btn-block text-info m-3" onClick={signUp}>Sign Up User</button>
//                 </div>
//             </div>
//         </div>

//     )
// }
import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../context/userContext';
import { registerUser } from '../APICalls/user.API';
import { useNavigate } from 'react-router-dom';

export default function SignUpUser() {
    const { userLogin, setLogin } = useContext(userContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
        name: '',
        disabled: '',
        phone: ''
    });

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value };
        setData({ ...data, ...inputs });

        // בדיקת תקינות הסיסמה ועדכון של passwordError
        const passwordIsValid = validatePassword(data.password);
        setPasswordError(passwordIsValid ? '' : 'הסיסמה אינה תקינה. יש להכיל לפחות 6 תווים, אותיות ומספרים.');

        // בדיקת תקינות המייל ועדכון של emailError
        const emailIsValid = validateEmail(data.email);
        setEmailError(emailIsValid ? '' : 'כתובת המייל אינה תקינה.');

        // בדיקת תקינות הפלאפון ועדכון של phoneError
        const phoneIsValid = validatePhone(data.phone);
        setPhoneError(phoneIsValid ? '' : 'מספר הפלאפון אינו תקין.');
    };

    const validatePassword = (password) => {
        const isLengthValid = password.length >= 6;
        const hasLetters = /[a-zA-Z]/.test(password);
        const hasNumbers = /\d/.test(password);
        return isLengthValid && hasLetters && hasNumbers;
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        // בדיקה פשוטה - מספר טלפון יכול להכיל רק ספרות ויהיה באורך 10 ספרות
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    const signUp = async (e) => {
        e.preventDefault();

        // בדיקת תקינות הסיסמה והצגת הודעה אם היא אינה תקינה
        if (!validatePassword(data.password)) {
            setPasswordError('הסיסמה אינה תקינה. יש להכיל לפחות 6 תווים, אותיות ומספרים.');
            return;
        }

        // בדיקת תקינות המייל והצגת הודעה אם הוא אינו תקין
        if (!validateEmail(data.email)) {
            setEmailError('כתובת המייל אינה תקינה.');
            return;
        }

        // בדיקת תקינות הפלאפון והצגת הודעה אם הוא אינו תקין
        if (!validatePhone(data.phone)) {
            setPhoneError('מספר הפלאפון אינו תקין.');
            return;
        }

        const { token, user } = await registerUser(data);
        localStorage.setItem('tokenUser', token);
        setLogin(user);
    };

    useEffect(() => {
        if (userLogin?.email) {
            navigate('/listResort');
        }
    }, [userLogin]);

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
                        className={`input-fields list-group-item m-3 ${emailError ? 'is-invalid' : ''}`}
                        onChange={(event) => handleInputs(event)}
                    />
                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                    <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        className={`input-fields list-group-item m-3 ${passwordError ? 'is-invalid' : ''}`}
                        onChange={(event) => handleInputs(event)}
                    />
                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                    <input
                        placeholder="Name"
                        name="name"
                        type="text"
                        className="input-fields list-group-item m-3"
                        onChange={(event) => handleInputs(event)}
                    />
                    <input
                        placeholder="Phone"
                        name="phone"
                        type="tel"
                        className={`input-fields list-group-item m-3 ${phoneError ? 'is-invalid' : ''}`}
                        onChange={(event) => handleInputs(event)}
                    />
                    {phoneError && <div className="invalid-feedback">{phoneError}</div>}
                    <select
                        name="disabled"
                        onChange={(event) => {
                            handleInputs(event);
                            console.log(event);
                        }}
                    >
                        <option value="visual">visual</option>
                        <option value="hearing">hearing</option>
                        <option value="motor">motor</option>
                        <option value="mentalHealth">mentalHealth</option>
                    </select>
                    <button className="btn btn-secondary btn-lg btn-block text-info m-3" onClick={signUp}>
                        Sign Up User
                    </button>
                </div>
            </div>
        </div>
</div>
    )
}
