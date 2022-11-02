import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import './SignupPage.scss';
import { Box } from "@mui/material";
import LandscapeIcon from '@mui/icons-material/Landscape';
import {useNavigate} from "react-router";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignupPage: React.FC = () : React.ReactElement=> {
    let navigate = useNavigate();
    const [has8Characters, setHas8Characters] = useState<boolean>(false);
    const [containsNumber, setContainsNumber] = useState<boolean>(false);
    const [hasSpecialCharacter, setHasSpecialCharacter] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<FormValues>({
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        confirmPassword: ''
    });
    useEffect(()=>{
        validatePassword(formValues.password)
    }, [formValues.password]);

    function validatePassword(password: string) {
        // Checking 8 characters
        setHas8Characters(password.length >= 8);
        // Regex for checking numbers
        setContainsNumber(/\d/.test(password));
        // Regex for checking special character
        setHasSpecialCharacter(/[!@#$%^&*]/.test(password));
    }

    function changeHandler (e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const name = e.target.name;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }


    async function handleSignUp (e: FormEvent) {
        e.preventDefault();
        if(formValues.password !== formValues.confirmPassword) {
            console.log('Passwords do not match');
        }
        if(
            formValues.firstName === '' ||
            formValues.lastName === '' ||
            formValues.email === '' ||
            formValues.password === '' ||
            formValues.confirmPassword === ''

        ) {
            //todo: create a toast for this instead of an alert
            alert('You are missing a required field')
            return
        }
        if(formValues.password !== formValues.confirmPassword) {
            //todo: create a toast for this instead of an alert
            alert('Passwords do not match')
            return
        }

        const newUser = {
            firstName : formValues.firstName,
            lastName : formValues.lastName,
            email : formValues.email,

        }

        console.log(newUser)

    }

    return (
        <Box className={'elSignupPage'}>
            <Box className={'contentContainer'}>
                <Box className={'formContainer'}>
                    <Box className={'titleContainer'}>
                        <h3 className={'leftCaption'}>Get started for free</h3>
                        <h1>Create an account</h1>
                        <h3 className={'rightCaption'}>Have an account? <span onClick={()=>navigate('/login')}>login</span></h3>
                    </Box>
                    <form onSubmit={handleSignUp}>
                        <Box className={'name'}>
                            <label>first name
                                <input
                                    type={'text'}
                                    name={'firstName'}
                                    placeholder={'homer'}
                                    value={formValues.firstName}
                                    onChange={changeHandler}
                                />
                            </label>
                            <label>last name
                                <input
                                    type={'text'}
                                    name={'lastName'}
                                    placeholder={'simpson'}
                                    value={formValues.lastName}
                                    onChange={changeHandler}
                                />
                            </label>
                        </Box>
                        <label>email
                            <input
                                type={'email'}
                                name={'email'}
                                placeholder={'forbidden_donut@email.com'}
                                value={formValues.email}
                                onChange={changeHandler}
                            />
                        </label>
                        <label>password
                            <input
                                type={'password'}
                                name={'password'}
                                placeholder={'••••••••••••'}
                                value={formValues.password}
                                onChange={changeHandler}
                            />
                        </label>
                        <label>confirm password
                            <input
                                type={'password'}
                                name={'confirmPassword'}
                                placeholder={'••••••••••••'}
                                value={formValues.confirmPassword}
                                onChange={changeHandler}
                            />
                        </label>
                        <button>submit</button>
                    </form>
                </Box>
                <h3 className={'tagLine'}>dream  •  plan  •  do</h3>
                <LandscapeIcon className={'logo'} onClick={()=>navigate('/')} />
            </Box>
        </Box>
    )
}

export default SignupPage;