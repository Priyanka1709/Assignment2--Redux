import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getImage } from '../../common/apiHelper';

const HotelData = (props) => (
    <div>
        <img className={'image'} src={getImage(props.image)}/>
        <div className={'data'}>
            <h1>{props.name}</h1>
            <h6>Weekend breaks | Affordable prices</h6>
            <p>
                <b>Location: </b>
                {props.location}
            </p>
            <p>
                <b>Average Price: </b>
                {props.avgPrice}
            </p>
            <p className={'offers'}>
                {props.offer}
            </p>
            <button type={'button'} className={'btn btn-primary'} onClick={props.handleEdit}>Edit</button>
            <Link to={'/'}>
                <button type={'button'} className={'btn btn-default'} onClick={props.handleBack}>Back to Home</button>
            </Link>
        </div>
    </div>
);

HotelData.propTypes = {
    handleEdit: PropTypes.func.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    avgPrice: PropTypes.string,
    offer: PropTypes.string,
};

HotelData.defaultProps = {
    image: '',
    name: '',
    location: '',
    avgPrice: '',
    offer: '',
};

export default HotelData;
