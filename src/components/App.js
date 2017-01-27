import React, { PropTypes } from 'react';
import logo from './logo.svg';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import LoadingSpinner from './LoadingSpinner';

import getWantedList from '../actions/get_wanted_list';
import addPerson from '../actions/add_person';

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

    this.handleNewPersonNameChange = this.handleNewPersonNameChange.bind(this);
    this.handleNewPersonReasonChange = this.handleNewPersonReasonChange.bind(this);
    this.handleNewPersonRewardChange = this.handleNewPersonRewardChange.bind(this);
    this.handleNewPersonNoseChange = this.handleNewPersonNoseChange.bind(this);
    this.handleNewPersonMouthChange = this.handleNewPersonMouthChange.bind(this);
    this.handleNewPersonEyeChange = this.handleNewPersonEyeChange.bind(this);
    this.handleSkinChange = this.handleSkinChange.bind(this);

    this.handlePersonCreation = this.handlePersonCreation.bind(this);
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

  handleNewPersonNameChange(e) {
      this.setState({
        newPersonName: e.target.value
      });
    }
    handleNewPersonReasonChange(e) {
      this.setState({
        newPersonReason: e.target.value
      });
    }
    handleNewPersonRewardChange(e) {
      this.setState({
        newPersonReward: e.target.value
      });
    }
    handleNewPersonEyeChange(e) {
      this.setState({
        newPersonEyes: e.target.value
      });
    }
    handleNewPersonNoseChange(e) {
      this.setState({
        newPersonNose: e.target.value
      });
    }
    handleNewPersonMouthChange(e) {
      this.setState({
        newPersonMouth: e.target.value
      });
    }
    handleSkinChange(e) {
      this.setState({
        newPersonSkin: e.target.value
      });
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

handlePersonCreation() {
    const person = {
      name: this.state.newPersonName,
      image: `https://api.adorable.io/avatars/face/eyes${this.state.newPersonEyes}/nose${this.state.newPersonNose}/mouth${this.state.newPersonMouth}/${this.state.newPersonSkin.slice(1)}`,
      reason: this.state.newPersonReason,
      reward: this.state.newPersonReward
    };
    this.props.addPerson(person);
    this.clearFormAndCloseModal();
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

          createPerson={this.handlePersonCreation}
          addToWantedList={this.handlePersonCreation}

          onSkinChange={this.handleSkinChange}
          onNoseChange={this.handleNewPersonNoseChange}
          onMouthChange={this.handleNewPersonMouthChange}
          onEyeChange={this.handleNewPersonEyeChange}
          onRewardChange={this.handleNewPersonRewardChange}
          onReasonChange={this.handleNewPersonReasonChange}
          onNameChange={this.handleNewPersonNameChange}

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
     getWantedList : getWantedList,
     addPerson: addPerson
   }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
