//css
import '../css/x_person.css'

function X_person({ whose_turn }) {
    return (
        <div className='x_person'>
            {(whose_turn) ? 
                <img className='img_style' src='images/xx_gray.png' alt=''/> : 
                <img className='img_style' src='images/xx.png' alt=''/>
            }
        </div>
    );
}

export default X_person;