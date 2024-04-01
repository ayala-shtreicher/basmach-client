// import React, { useContext, useEffect, useState } from 'react'
// import { userContext } from '../context/userContext'
// import { registerOwner } from '../APICalls/user.API'

// export default function SignUpOwner() {
//     const {userLogin, setLogin } = useContext(userContext)
//     const [data, setData] = useState({
//         email: '',
//         password: '',
//         name: '',
//         phone:''
//     })

//     const handleInputs = (event) => {
  
//         let inputs = { [event.target.name]: event.target.value }
//         setData({ ...data, ...inputs })
//     }

  
    

    
//     const signUp = async (e) => {
//         e.preventDefault();
        
//         const {owner,token}  = await registerOwner(data);
//         console.log(token,owner);
//         localStorage.setItem("tokenUser", token)
//         setLogin(owner);
//     }
//     useEffect(()=>{
//         console.log(userLogin);
//         if (userLogin?.email) {
//             navigate('/formResort');
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
//                         type="phone"
//                         className="input-fields list-group-item m-3"
//                         onChange={event => handleInputs(event)}
//                     />
//                     <button className="btn btn-secondary btn-lg btn-block text-info m-3" onClick={signUp}>Sign Up Owner</button>
//                 </div>
//             </div>
//         </div>

//     )
// }
import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../context/userContext';
import { registerOwner } from '../APICalls/user.API';

export default function SignUpOwner() {
    const { userLogin, setLogin } = useContext(userContext);
    const [data, setData] = useState({
        email: '',
        password: '',
        name: '',
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

        const { owner, token } = await registerOwner(data);
        console.log(token, owner);
        localStorage.setItem('tokenUser', token);
        setLogin(owner);
    };

    useEffect(() => {
        console.log(userLogin);
        if (userLogin?.email) {
            navigate('/formResort');
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
                    <button className="btn btn-secondary btn-lg btn-block text-info m-3" onClick={signUp}>
                        Sign Up Owner
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}
