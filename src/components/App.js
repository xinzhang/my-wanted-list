import React, { PropTypes } from 'react';
import logo from './logo.svg';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getWantedList} from '../actions/get_wanted_list';

import LoadingSpinner from './LoadingSpinner';
import WantedCard from './WantedCard';
import AddUserModal from './AddUserModal'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          openModal: false,
          newPersonName: '',
          newPersonReason: '',
          newPersonReward: '',
          newPersonEyes: '',
          newPersonNose: '',
          newPersonMouth: '',
          newPersonSkin: '#CE96FF'
    }

    this.toggleModalState = this.toggleModalState.bind(this);
  }

  toggleModalState() {
    if(this.state.openModal) {
      this.clearFormAndCloseModal();
    } else {
      this.setState({
        openModal: true
      })
    }
  }

  clearFormAndCloseModal() {
    this.setState({
      newPersonName: '',
      newPersonReason: '',
      newPersonReward: '',
      newPersonEyes: 1,
      newPersonNose: 1,
      newPersonMouth: 1,
      newPersonSkin: '#CE96FF',
      openModal: false
    });
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
        <AddUserModal


          name={this.state.newPersonName}
          reason={this.state.newPersonReason}
          reward={this.state.newPersonReward}
          eyes={this.state.newPersonEyes}
          nose={this.state.newPersonNose}
          mouth={this.state.newPersonMouth}
          skinTone={this.state.newPersonSkin}
          
          open={this.state.openModal}
          close={this.toggleModalState}
          />
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
