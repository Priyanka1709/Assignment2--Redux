import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../home/searchBar';
import CardsPane from '../home/cardsPane';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            inputText: this.props.match.params.string,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    componentDidMount() {
        this.props.fetchCards();
    }
    handleClear() {
        this.setState({
            inputText: '',
        });
    }
    handleChange(e) {
        this.setState({
            inputText: e.target.value,
        });
    }
    render() {
        return (
            <div>
                <SearchBar inputText={this.state.inputText} onChange={this.handleChange} onClear={this.handleClear}/>
                <br/><br/>
                <CardsPane fetching={this.props.fetching} cards={this.props.filteredCards(this.props.match.params.string)}/>
            </div>
        );
    }
}

Home.propTypes = {
    fetching: PropTypes.bool,
    filteredCards: PropTypes.func.isRequired,
    fetchCards: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
};

Home.defaultProps = {
    fetching: false,
};

export default Home;
