import React from 'react';
import PropTypes from 'prop-types';
import img01 from "../../image/img01.png"
import "./styles.scss"
const ItemNotifi = props => {
    return (
        <div className='itemNotifi'>
            <div className='itemNotifi__image'>
                <img src={img01} alt="" />
            </div>
            <div className='itemNotifi__title'>
                <p>Premium-Weight Crew</p>
            </div>
            <div className='itemNotifi__btnDes'>
                <button>-</button>
            </div>
            <div className='itemNotifi__num'>
                <p>1</p>
            </div>
            <div className='itemNotifi__btnIns'>
                <button>+</button>
            </div>
            <div className='itemNotifi__prices'>
                <p>$100</p>
            </div>
            <div className='itemNotifi__delete'>
                <button>x</button>
            </div>
        </div>
    );
};

ItemNotifi.propTypes = {
    
};

export default ItemNotifi;