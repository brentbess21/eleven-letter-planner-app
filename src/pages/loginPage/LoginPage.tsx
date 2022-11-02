import React, {ChangeEvent, useState} from 'react';
import './LoginPage.scss';
import {Box} from "@mui/material";
import {useNavigate} from "react-router";
import LandscapeIcon from "@mui/icons-material/Landscape";

interface FormValues {
    email: string;
    password: string;
}

const LoginPage: React.FC = () : React.ReactElement => {
    let navigate = useNavigate();
    const [formValues, setFormValues] = useState<FormValues>({
        email: '',
        password: ''
    })

    function changeHandler (e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const name = e.target.name;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    return (
        <Box className={'elLoginPage'}>
            <Box className={'contentContainer'}>
                <Box className={'formContainer'}>
                    <Box className={'titleContainer'}>
                        <h3 className={'leftCaption'}>Welcome back</h3>
                        <h1>Login to continue</h1>
                        <h3 className={'rightCaption'}>Don't have an account? <span onClick={()=>navigate('/signup')}>signup</span></h3>
                    </Box>
                    <form>
                        <label> email
                            <input
                                type={'email'}
                                name={'email'}
                                placeholder={'forbidden_donut@email.com'}
                                value={formValues.email}
                                onChange={changeHandler}
                            />
                            <label>password
                                <input
                                    type={'password'}
                                    name={'password'}
                                    placeholder={'••••••••••••'}
                                    value={formValues.password}
                                    onChange={changeHandler}
                                />
                            </label>
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

export default LoginPage;