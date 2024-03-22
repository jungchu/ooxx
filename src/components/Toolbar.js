import { useState, useEffect, useRef } from 'react';

//icon
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

function Toolbar() {
    const [is_sound_on, set_is_sound_on] = useState(false);
    const bg_music = useRef();

    const change_sound = (is_sound_on) => {
        set_is_sound_on(is_sound_on);
        (is_sound_on) ? bg_music.current.play() : bg_music.current.pause();
    };

    return (
        <div 
            className='Toolbar' 
            style={{
                position: 'fixed', 
                bottom: 0,
                width: '100vw', 
                backgroundColor: '#dcdcdcd1'
            }}
        >
            {is_sound_on ? 
                <VolumeMuteIcon onClick={() => change_sound(false)}/> :
                <VolumeUpIcon onClick={() => change_sound(true)}/>
            }
            <audio ref={bg_music}>
                <source src='music/bgm.mp3' type='audio/mpeg' />
            </audio>
        </div>
    )
}

export default Toolbar;