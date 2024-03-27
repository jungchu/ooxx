import { useEffect, useState } from 'react';

//css
import '../css/ox_table.css';

//mui
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


//icon
import ClearIcon from '@mui/icons-material/Clear';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

function Table ({ 
    whose_turn, 
    change_turn, 
    is_sound_on, 
    ox_arr, 
    set_ox_arr, 
    winner, 
    set_winner 
}) {
    const sound = new Audio('music/stab_lightly.mp3');

    const Item = styled(Paper)(() => ({
        height: '150px',
        backgroundColor: 'rgba(235, 235, 235, 0.8)',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none'
    }));

    const give_ox = (index) => {
        const new_ox_arr = ox_arr.map((ox, i) => {
            if (i === index && !ox.value) {
                ox.value = (whose_turn) ? 'o' : 'x';
                if (is_sound_on) sound.play(); 
                change_turn();
            }
            return ox;
        })
        set_ox_arr(new_ox_arr);
    };
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const who_win = () => {
        // 判斷贏家
        for (let i = 0; i < lines.length; i++) {
            if (
                ox_arr[lines[i][0]].value === ox_arr[lines[i][1]].value && 
                ox_arr[lines[i][1]].value === ox_arr[lines[i][2]].value && 
                ox_arr[lines[i][2]].value === ox_arr[lines[i][0]].value && 
                ['o', 'x'].includes(ox_arr[lines[i][0]].value)
            ) {                
                set_winner(ox_arr[lines[i][0]].value);
                break;
            }
        }
    };

    useEffect(() => {
        who_win();

        // 判斷下哪步
        if (winner === '' && !whose_turn) {
            // 1.判斷是否有快連線的叉叉
            for (let i = 0; i < lines.length; i++) {
                const ox = [ox_arr[lines[i][0]].value, ox_arr[lines[i][1]].value, ox_arr[lines[i][2]].value];
                const x_line = ox.filter(x => x === 'x');
                if (x_line.length === 2) {
                    const index = ox.findIndex(x => x === '');
                    if (index >= 0) {
                        const timeout = setTimeout(() => {
                            give_ox(lines[i][index]);
                        }, 300);
    
                        return () => clearTimeout(timeout);
                    }
                }
            }
            // 2.判斷是否有快連線的圈圈
            for (let i = 0; i < lines.length; i++) {
                const ox = [ox_arr[lines[i][0]].value, ox_arr[lines[i][1]].value, ox_arr[lines[i][2]].value];
                const o_line = ox.filter(x => x === 'o');
                if (o_line.length === 2) {
                    const index = ox.findIndex(x => x === '');
                    if (index >= 0) {
                        const timeout = setTimeout(() => {
                            give_ox(lines[i][index]);
                        }, 300);
    
                        return () => clearTimeout(timeout);
                    }
                }
            }

            const blank_arr = ox_arr.filter(x => x.value === '');
            if (blank_arr.length > 0) {
                const blank_center = blank_arr.filter(x => x.id === 4);
                // 3.如果中央是空的，先填中央那格
                if (blank_center.length > 0) {
                    const timeout = setTimeout(() => {
                        give_ox(4);
                    }, 300);
    
                    return () => clearTimeout(timeout);
                }

                // 4.隨機給叉叉
                const getRandomInt = (max) => {
                    return Math.floor(Math.random() * max);
                };
                
                const random_index = getRandomInt(blank_arr.length);
                const timeout = setTimeout(() => {
                    give_ox(blank_arr[random_index].id);
                }, 300);

                return () => clearTimeout(timeout);
            }
        };
    }, [whose_turn])

    return (
        <div className='table'>
            <div className='game_table'>
                <Grid 
                    className='game_table'
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    {ox_arr.map((ox) => 
                        <Grid 
                            item
                            xs={4} 
                            className={'cell_' + ox.id}
                            key={'key_cell_' + ox.id}
                            onClick={() => give_ox(ox.id)}
                            style={(winner !== '') ? {pointerEvents: 'none'} : (whose_turn) ? {} : {pointerEvents: 'none'}}
                        >
                            <Item className='ox_item'>
                                {ox.value === 'o' && <PanoramaFishEyeIcon className='o_style' />}
                                {ox.value === 'x' && <ClearIcon className='x_style' />}
                            </Item>
                        </Grid>
                    )}
                </Grid>
            </div>
        </div>
    );
}

export default Table;