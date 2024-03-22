import { useState } from 'react';

//css
import '../css/ox_table.css'

//mui
import Grid from '@mui/material/Grid';

//icon
import ClearIcon from '@mui/icons-material/Clear';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';


function Table ({whose_turn, change_turn}) {
    const [ox_arr, set_ox_arr] = useState([
        {id: 0, value: ''},
        {id: 1, value: ''},
        {id: 2, value: ''},
        {id: 3, value: ''},
        {id: 4, value: ''},
        {id: 5, value: ''},
        {id: 6, value: ''},
        {id: 7, value: ''},
        {id: 8, value: ''}
    ])
    const give_ox = (index) => {
        const new_ox_arr = ox_arr.map((ox, i) => {
            console.log('ox', ox)
            if (i == index && !ox.value) {
                ox.value = (whose_turn) ? 'o' : 'x';
                
                const music = new Audio('music/stab_lightly.mp3');
                music.play();
                
                change_turn();
            }
            return ox;
        })
    };

    return (
        <div className='table'>
            <div className='game_table'>
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {ox_arr.map((ox) => 
                        <Grid 
                            className={'cell_' + ox.id} 
                            xs={4} 
                            key={'key_cell_' + ox.id}
                            onClick={() => give_ox(ox.id)}
                        > 
                            {ox.value == 'o' && <PanoramaFishEyeIcon style={{color: '#0097e4', fontSize: '60px'}} />}
                            {ox.value == 'x' && <ClearIcon style={{color: '#e34200', fontSize: '70px'}} />}
                        </Grid>
                    )}
                </Grid>
            </div>
        </div>
    );
}

export default Table;