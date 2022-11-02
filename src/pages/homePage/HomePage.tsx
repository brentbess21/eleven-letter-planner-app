import React from 'react';
import './HomePage.scss';
import { Box } from '@mui/material';
import LandscapeIcon from '@mui/icons-material/Landscape';
import {useNavigate} from "react-router";

const HomePage =()=> {
    let navigate = useNavigate();
    return (
        <Box className={'elHomePage'}>
            <Box className={'contentContainer'}>
                <Box className={'tagLine'}>
                    <h3>dream  •  plan  •  do</h3>
                </Box>
                <Box className={'mainContent'}>
                    <Box className={'textContent'}>
                        <h1>Eleven Letter Planner</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo. Sit amet nulla facilisi morbi tempus iaculis. </p>
                        <Box className={'buttonsContainer'}>
                            <button className={'lightButton'} onClick={()=>navigate('/signup')}>sign up</button>
                            <button className={'darkButton'} onClick={()=>navigate('/login')}>login</button>
                        </Box>
                    </Box>
                    <Box className={'logoContainer'}>
                        <LandscapeIcon className={'logo'} />
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}

export default HomePage;