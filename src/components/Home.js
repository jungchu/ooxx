import { useState, useEffect } from 'react';

//css
import '../css/home.css'
//components
import O_person from './O_person';
import X_person from './X_person';
import OX_table from './OX_table';
import Toolbar from './Toolbar';

function Home () {
    const [is_start, set_is_start] = useState(false);
    const [whose_turn, set_whose_turn] = useState(true);
    const [is_sound_on, set_is_sound_on] = useState(false);

    const sound = new Audio('music/poka02.mp3');

    const change_turn = () => {
        set_whose_turn(!whose_turn);
    };

    const click_start_btn = () => {
        set_is_start(true);
        if (is_sound_on) sound.play();
    };

    const change_sound = (is_sound_on) => {
        set_is_sound_on(is_sound_on);
    };

    return (
        <>
            {(is_start) ? 
                (
                    <div className='gamepage'>
                        <O_person whose_turn={ whose_turn }/>
                        <OX_table whose_turn={ whose_turn } change_turn={change_turn} is_sound_on={is_sound_on}/>
                        <X_person whose_turn={ whose_turn }/>
                    </div>
                ) 
                : 
                (  
                    <div className='homepage'>
                        <div>
                            <div>
                                <img style={{marginBottom : '50px'}} src='images/logo.png' alt="OOXX" width="500" height="250" />
                            </div>
                            <button 
                                className='start_btn'
                                onClick={() => click_start_btn()}
                            > S T A R T </button>
                        </div>
                    </div>
                )
            }

            <Toolbar 
                is_sound_on={is_sound_on}
                change_sound={change_sound}
            />
        </>
    )
}

export default Home;