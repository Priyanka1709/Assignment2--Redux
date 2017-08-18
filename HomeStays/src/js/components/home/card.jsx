import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getImage } from '../../common/apiHelper';

const Card = (props) => (
    <div className={'cardBlock'} id={props.item.id}>
        <Link to={`/details/${props.item.id}`}>
            <img src={getImage(props.item.image)} className={'cardImg'}/>
            <div className={'cardName'}>
                {props.item.name}
            </div>
        </Link>
    </div>
);

Card.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Card;
