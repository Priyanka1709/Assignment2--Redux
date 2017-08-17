import React from 'react';
import PropTypes from 'prop-types';

const Edit = (props) => (
    <div className={'modal-dialog'}>
        <div className={'modal-content'}>
            <div className={'modal-header'}>
                <button type={'button'} className={'close'} onClick={props.handleCancel}>&times;</button>
                <h4 className={'modal-title'}>Edit</h4>
            </div>
            <div className={'modal-body text-left'}>
                <form>
                    <label>Name:</label>
                    <input type={'text'} className={'form-control'} defaultValue={props.name} ref={props.nameRef}/>
                    <label>Location:</label>
                    <input type={'text'} className={'form-control'} defaultValue={props.location} ref={props.locationRef}/>
                    <label>Average Price:</label>
                    <input type={'text'} className={'form-control'} defaultValue={props.avgPrice} ref={props.avgPriceRef}/>
                    <label>Offer:</label>
                    <input type={'text'} className={'form-control'} defaultValue={props.offer} ref={props.offerRef}/>
                </form>
            </div>
            <div className={'modal-footer'}>
                <button type={'button'} className={'btn btn-primary'} onClick={props.handleSave}>Save</button>
                <button type={'button'} className={'btn btn-default'} onClick={props.handleClear}>Clear</button>
            </div>
        </div>
    </div>
);

Edit.propTypes = {
    handleCancel: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleClear: PropTypes.func.isRequired,
    name: PropTypes.string,
    nameRef: PropTypes.func.isRequired,
    location: PropTypes.string,
    locationRef: PropTypes.func.isRequired,
    avgPrice: PropTypes.string,
    avgPriceRef: PropTypes.func.isRequired,
    offer: PropTypes.string,
    offerRef: PropTypes.func.isRequired,
};

Edit.defaultProps = {
    name: '',
    location: '',
    avgPrice: '',
    offer: '',
};

export default Edit;
