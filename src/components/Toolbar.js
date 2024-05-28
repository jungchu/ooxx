import { useState, useRef } from 'react';

//icon
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function Toolbar({ is_sound_on, is_music_on, set_is_music_on, change_sound }) {
    const bg_music = useRef();

    const change_music = (is_music_on) => {
        set_is_music_on(is_music_on);
        (is_music_on) ? bg_music.current.play() : bg_music.current.pause();
    };

    return (
        <div 
            className='Toolbar' 
            style={{
                position: 'fixed', 
                bottom: 0,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: '100%', 
                height: '40px',
                backgroundColor: '#edededd1'
            }}
        >
            {is_sound_on ? 
                <VolumeMuteIcon style={{color: '#5b5b5b', margin: '2px 15px 0 0'}} onClick={() => change_sound(false)}/> :
                <VolumeUpIcon style={{color: '#5b5b5b', margin: '2px 15px 0 0'}} onClick={() => change_sound(true)}/>
            }

            {is_music_on ? 
                <MusicOffIcon style={{color: '#5b5b5b', margin: '2px 15px 0 0'}} onClick={() => change_music(false)}/> :
                <MusicNoteIcon style={{color: '#5b5b5b', margin: '2px 15px 0 0'}} onClick={() => change_music(true)}/>
            }

            {/* https://musopen.org/music/fun/ */}
            <audio ref={bg_music} loop>
                <source src='music/bgm.mp3' type='audio/mpeg' />
            </audio>
        </div>
    )
}

export default Toolbar;