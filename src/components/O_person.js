function O_person({ whose_turn }) {
    return (
        <div>
            {(whose_turn) ? <img src='images/oo.png'/> : <img src='images/oo_gray.png'/>}
        </div>
    );
}
  
export default O_person;