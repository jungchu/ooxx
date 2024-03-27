import { useEffect, useRef } from 'react';

//css
import '../css/result.css';

function Result ({ winner, set_winner, is_sound_on, is_music_on, set_is_start, set_ox_arr }) {
    const bg_music = useRef();
    bg_music.volume = 0.2;
    const sound = new Audio('music/poka02.mp3');

    const click_home_btn = () => {
        set_is_start(false);
        if (is_sound_on) sound.play();
        bg_music.current.pause();

        set_winner('');
        set_ox_arr([
            {id: 0, value: ''},
            {id: 1, value: ''},
            {id: 2, value: ''},
            {id: 3, value: ''},
            {id: 4, value: ''},
            {id: 5, value: ''},
            {id: 6, value: ''},
            {id: 7, value: ''},
            {id: 8, value: ''}
        ]);
    };

    useEffect(() => {
        document.getElementById('bg_music').volume = 0.2;
        if (is_music_on) bg_music.current.play();
    })

    return (
        <div className={(winner === 'o') ? 'result_o' : (winner === 'x') ? 'result_x' : 'result'}>
            {
                (winner === 'o') ? 
                    <div className='oo_win'>OO勝利</div> :
                (winner === 'x') ?
                    <div className='xx_win'>XX勝利</div> :
                    <div className='tie'>平手</div>
            }

            <div>
                <button 
                    className='home_btn'
                    onClick={() => click_home_btn()}
                > H O M E </button>
            </div>

            <audio id='bg_music' ref={bg_music}>
                <source src='music/cheers2.mp3' type='audio/mpeg'/>
            </audio>
        </div>
    );
}

export default Result;