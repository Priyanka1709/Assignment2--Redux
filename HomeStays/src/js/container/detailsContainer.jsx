import React from 'react';
import PropTypes from 'prop-types';
import { getCardDetails, postCardDetails } from '../common/apiHelper';
import Details from '../components/details/details';

class DetailsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: null,
            editMode: false,
        };
        this.editHandler = this.editHandler.bind(this);
        this.backHandler = this.backHandler.bind(this);
        this.editCancelHandler = this.editCancelHandler.bind(this);
        this.editSaveHandler = this.editSaveHandler.bind(this);
        this.editClearHandler = this.editClearHandler.bind(this);
    }
    componentDidMount() {
        getCardDetails(this.props.match.params.id)
            .then((value) => this.setState({
                details: value,
            }));
    }

    editHandler() {
        this.setState({
            editMode: true,
        });
    }

    backHandler() {
        window.location.href = '/';
    }

    editSaveHandler() {
        const name = this.nameInputElement.value;
        const location = this.locationInputElement.value;
        const avgPrice = this.avgPriceInputElement.value;
        const offer = this.offerInputElement.value;
        const id = this.props.match.params.id;

        postCardDetails(id, { name, location, avgPrice, offer })
            .then(() => {
                this.setState({
                    editMode: false,
                });
                return getCardDetails(id);
            })
            .then((value) => this.setState({
                details: value,
            }));

    }

    editClearHandler() {
        this.nameInputElement.value = '';
        this.locationInputElement.value = '';
        this.avgPriceInputElement.value = '';
        this.offerInputElement.value = '';
    }

    editCancelHandler() {
        this.setState({
            editMode: false,
        });
    }

    render() {
        return (
            <div className="details">
                {this.state.details ?
                    <Details
                        editMode={this.state.editMode}
                        details={this.state.details}
                        nameRef={(el) => {
                            this.nameInputElement = el;
                        }}
                        locationRef={(el) => {
                            this.locationInputElement = el;
                        }}
                        avgPriceRef={(el) => {
                            this.avgPriceInputElement = el;
                        }}
                        offerRef={(el) => {
                            this.offerInputElement = el;
                        }}
                        saveHandler={this.editSaveHandler}
                        clearHandler={this.editClearHandler}
                        cancelHandler={this.editCancelHandler}
                        editHandler={this.editHandler}
                        backHandler={this.backHandler}
                    /> : <h3>{'Loading...'}</h3>
                }
            </div>
        );
    }
}

DetailsContainer.propTypes = {
    match: PropTypes.object.isRequired,
};

export default DetailsContainer;
