import React from 'react';

class WantedCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const person = this.props.person;
    const title = `Image of the very wanted person, ${person.name}`;

    return (
      <div className="card">
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

export default WantedCard;
