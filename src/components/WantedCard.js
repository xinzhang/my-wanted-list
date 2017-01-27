import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import deletePerson from '../actions/delete_person'

class WantedCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeletePerson = this.handleDeletePerson.bind(this);
  }

  handleDeletePerson() {
    this.props.deletePerson(this.props.person);
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
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({
     deletePerson : deletePerson
   }, dispatch);
}

export default connect(null, mapDispatchToProps)(WantedCard);
