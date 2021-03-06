import React from 'react';
import PropTypes from 'prop-types';
import Edit from './editData';
import HotelData from './hotelData';

class Details extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        };
        this.editHandler = this.editHandler.bind(this);
        this.editCancelHandler = this.editCancelHandler.bind(this);
        this.editSaveHandler = this.editSaveHandler.bind(this);
        this.editChangeHandler = this.editChangeHandler.bind(this);
    }
    componentDidMount() {
        this.props.fetchCardDetail(this.props.match.params.id);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.cardDetail) {
            this.setState({
                name: nextProps.cardDetail.name,
                location: nextProps.cardDetail.location,
                avgPrice: nextProps.cardDetail.avgPrice,
                offer: nextProps.cardDetail.offer,
            });
        }
    }

    editHandler() {
        this.setState({
            editMode: true,
        });
    }

    editChangeHandler(e) {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    editSaveHandler() {
        const id = this.props.match.params.id;

        this.props.postCardDetail(id,
            {
                name: this.state.name,
                location: this.state.location,
                avgPrice: this.state.avgPrice,
                offer: this.state.offer,
            });

        this.setState({
            editMode: false,
        });
    }

    editCancelHandler() {
        this.setState({
            editMode: false,
        });
    }

    render() {
        return (
            <div className={'details'}>
                {
                    this.props.fetching && <h3>{'Loading...'}</h3>
                }
                {
                    this.props.cardDetail &&
                    (this.state.editMode ?
                        <Edit
                            name={this.state.name}
                            location={this.state.location}
                            avgPrice={this.state.avgPrice}
                            offer={this.state.offer}
                            handleChange={this.editChangeHandler}
                            handleSave={this.editSaveHandler}
                            handleCancel={this.editCancelHandler}
                        /> : <HotelData
                            image={this.props.cardDetail.image}
                            name={this.state.name}
                            location={this.state.location}
                            avgPrice={this.state.avgPrice}
                            offer={this.state.offer}
                            handleEdit={this.editHandler}
                        />)
                }
            </div>
        );
    }
}

Details.propTypes = {
    fetching: PropTypes.bool,
    cardDetail: PropTypes.object,
    fetchCardDetail: PropTypes.func.isRequired,
    postCardDetail: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
};

Details.defaultProps = {
    fetching: false,
    cardDetail: null,
};

export default Details;
