import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import updatePerson from '../actions/update_person';
import deletePerson from '../actions/delete_person';
import {Note} from './Note';

class WantedCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
          editReason: false,
          reason: props.person.reason
        };

    this.handleDeletePerson = this.handleDeletePerson.bind(this);

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleReasonChange = this.handleReasonChange.bind(this);
    this.handleUpdatePerson = this.handleUpdatePerson.bind(this);

  }

  handleDeletePerson() {
    this.props.deletePerson(this.props.person);
  }

  toggleEdit() {
      this.setState({
        editReason: !this.state.editReason
      })
    }
    handleReasonChange(e) {
      this.setState({
        reason: e.target.value
      });
    }
    handleUpdatePerson() {
      const update = {
        name: this.props.person.name,
        image: this.props.person.image,
        reward: this.props.person.reward,
        reason: this.state.reason
      }
      this.props.updatePerson(update);
      this.toggleEdit();
    }

  render() {
    const person = this.props.person;
    const title = `Image of the very wanted person, ${person.name}`;

    return (
      <div className="card">

        <button
          className="btn btn-clear tooltip"
          data-tooltip="Delete because person has been captured."
          onClick={this.handleDeletePerson}></button>

        <div className="card-header">
            <figure
              className="avatar avatar-xl tooltip" data-tooltip={title}>
              <img alt={title} src={person.image} />
            </figure>
            <h4 className="card-title">{person.name}</h4>
        </div>

        <Note
          toggleEdit={this.toggleEdit}
          updatePerson={this.handleUpdatePerson}
          edit={this.state.editReason}
          handleReasonChange={this.handleReasonChange}
          content={this.state.reason} />
          <small className="reward">
            <span>Reward for capture:</span> {person.reward}
          </small>

      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({
     deletePerson : deletePerson,
     updatePerson: updatePerson,
   }, dispatch);
}

export default connect(null, mapDispatchToProps)(WantedCard);
