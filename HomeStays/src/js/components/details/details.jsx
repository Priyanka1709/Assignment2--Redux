import React from 'react';
import PropTypes from 'prop-types';
import Edit from './editData';
import HotelData from './hotelData';

const Details = (props) => (
    <div>
        {
            props.editMode ?
                <Edit
                    name={props.details.name}
                    nameRef={props.nameRef}
                    location={props.details.location}
                    locationRef={props.locationRef}
                    avgPrice={props.details.avgPrice}
                    avgPriceRef={props.avgPriceRef}
                    offer={props.details.offer}
                    offerRef={props.offerRef}
                    handleSave={props.saveHandler}
                    handleClear={props.clearHandler}
                    handleCancel={props.cancelHandler}
                /> : <HotelData
                    image={props.details.image}
                    name={props.details.name}
                    location={props.details.location}
                    avgPrice={props.details.avgPrice}
                    offer={props.details.offer}
                    handleEdit={props.editHandler}
                    handleBack={props.backHandler}
                />
        }
    </div>
);

Details.propTypes = {
    editMode: PropTypes.bool.isRequired,
    details: PropTypes.object.isRequired,
    nameRef: PropTypes.func.isRequired,
    locationRef: PropTypes.func.isRequired,
    avgPriceRef: PropTypes.func.isRequired,
    offerRef: PropTypes.func.isRequired,
    saveHandler: PropTypes.func.isRequired,
    clearHandler: PropTypes.func.isRequired,
    cancelHandler: PropTypes.func.isRequired,
    editHandler: PropTypes.func.isRequired,
    backHandler: PropTypes.func.isRequired,
};

export default Details;
