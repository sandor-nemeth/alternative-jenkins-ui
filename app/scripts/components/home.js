import React from 'react';
import JenkinsNavbar from './navbar';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Browserify',
        'Babel',
        'Modernizr',
        'Jest'
      ]
    };
  }

  render() {
    console.log(JenkinsNavbar)
    return (
      <div>
      <JenkinsNavbar />
      <div className="hero-unit">
        <h1>'Allo, 'Allo!</h1>
        <p>This is a React component.<br/>
           You now also have:</p>
        <ul>{this.state.items.map(this.renderItem)}</ul>
      </div>
      </div>
    );
  }

  renderItem(item, index) {
    return <li key={index}>{item}</li>;
  }
}
