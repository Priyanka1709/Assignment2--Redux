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
                    <input id={'name'} type={'text'} className={'form-control'} value={props.name} onChange={props.handleChange}/>
                    <label>Location:</label>
                    <input id={'location'} type={'text'} className={'form-control'} value={props.location} onChange={props.handleChange}/>
                    <label>Average Price:</label>
                    <input id={'avgPrice'} type={'text'} className={'form-control'} value={props.avgPrice} onChange={props.handleChange}/>
                    <label>Offer:</label>
                    <input id={'offer'} type={'text'} className={'form-control'} value={props.offer} onChange={props.handleChange}/>
                </form>
            </div>
            <div className={'modal-footer'}>
                <button type={'button'} className={'btn btn-primary'} onClick={props.handleSave}>Save</button>
                <button type={'button'} className={'btn btn-default'} onClick={props.handleCancel}>Cancel</button>
            </div>
        </div>
    </div>
);

Edit.propTypes = {
    handleCancel: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    location: PropTypes.string,
    avgPrice: PropTypes.string,
    offer: PropTypes.string,
};

Edit.defaultProps = {
    name: '',
    location: '',
    avgPrice: '',
    offer: '',
};

export default Edit;
