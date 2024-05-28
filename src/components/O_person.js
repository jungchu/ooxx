//css
import '../css/o_person.css'

function O_person({ whose_turn }) {
    return (
        <div className='o_person'>
            {(whose_turn) ? 
                <img className='img_style' src='images/oo.png' alt=''/> : 
                <img className='img_style' src='images/oo_gray.png' alt=''/>
            }
        </div>
    );
}

export default O_person;