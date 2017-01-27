import React, { PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getWantedList} from '../actions/get_wanted_list';

import LoadingSpinner from './LoadingSpinner';
import WantedCard from './WantedCard';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModalState = this.toggleModalState.bind(this);
  }

  toggleModalState() {
  }

  renderUsers() {
      if(this.props.wantedPeople) {
        return this.props.wantedPeople.map(person => {
          return <WantedCard key={person.name} person={person} />;
        });
      } else {
        return <LoadingSpinner />;
      }
  }

  componentDidMount() {
    this.props.getWantedList();
  }

  render() {
    return (
      <div className="App container">
        <div className="card-container">
          <div className="columns">
            <div className="column col-md-6">
              <h2>
                Most Wanted:
                <button
                  className="btn btn-primary"
                  onClick={this.toggleModalState}>Add</button>
              </h2>
              {this.renderUsers()}
            </div>
            <div className="column col-md-6">
            </div>
          </div>
        </div>
      </div>
    );
  }

}

 App.propTypes = {
   wantedPeople: PropTypes.array.isRequired
 };

function mapStateToProps(state) {
  return {
    wantedPeople: state.wantedPeople
  };
}

function mapDispatchToProps(dispatch) {
  // return {
  //   actions: bindActionCreators(getWantedList, dispatch);
  // }
   return bindActionCreators({
     getWantedList : getWantedList
   }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
