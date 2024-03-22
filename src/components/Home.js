import { useState, useEffect } from 'react';

//components
import O_person from './O_person';
import X_person from './X_person';
import OX_table from './OX_table';
import Toolbar from './Toolbar';
import { yellow } from '@mui/material/colors';

function Home () {
    const [is_start, set_is_start] = useState(false);
    const [whose_turn, set_whose_turn] = useState(true);

    const change_turn = () => {
        set_whose_turn(!whose_turn);
    };

    const click_start_btn = () => {
        set_is_start(true);
        const music = new Audio('music/poka02.mp3');
        music.play();
    };

    if (is_start) {
        return (
            <div className='Game'>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <O_person whose_turn={ whose_turn }/>
                    <OX_table whose_turn={ whose_turn } change_turn={change_turn}/>
                    <X_person whose_turn={ whose_turn }/>
                </div>
                <Toolbar/>
            </div>
        );
    }
    return (
        <div 
            className='Home' 
            style={{
                width: '100vw', 
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <div>
                <div>
                    <img style={{marginBottom : '50px'}} src='images/logo.png' alt="OOXX" width="500" height="250" />
                </div>
                <button 
                    style={{
                        width: '150px', 
                        height: '50px', 
                        fontSize: '25px',
                        backgroundColor: '#fff378',
                        border: '3px solid #ffcf38',
                        borderRadius: '5px',
                        color: '#6f6761',
                        fontWeight: 'bold'
                    }}
                    onClick={() => click_start_btn()}
                > S T A R T </button>
            </div>
            <Toolbar/>
        </div>
    );
}

export default Home;