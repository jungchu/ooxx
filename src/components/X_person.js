function X_person({ whose_turn }) {
    return (
        <div>
            {(whose_turn) ? <img src='images/xx_gray.png'/> : <img src='images/xx.png'/>}
        </div>
    );
}

export default X_person;