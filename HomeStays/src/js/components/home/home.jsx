import React from 'react';
import PropTypes from 'prop-types';
import { bindHandlers } from 'react-bind-handlers';
import SearchBar from '../search/searchBar';
import CardsPane from '../cards/cardsPane';


class Home extends React.PureComponent {
    constructor(props){
        super(props);

        this.state= {
            inputText: '',
        }
        this.onChange= this.onChange.bind(this);
        this.onClear= this.onClear.bind(this);
    }
    componentDidMount() {
        this.props.fetchCards();
    }
    onClear() {
        this.setState({
            inputText: ''
        });
    }
    onChange(e) {
        this.setState({
            inputText: e.target.value
        });
    }
    render() {
        return (
            <div>
                <SearchBar inputText={this.state.inputText} onChange={this.onChange} onClear={this.onClear}/>
                <br/><br/>
                <CardsPane cards={this.props.cards}/>
            </div>
        );
    }
}

export default bindHandlers(Home);
