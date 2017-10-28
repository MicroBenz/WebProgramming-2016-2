const React = require('react');
const HelloMessage = require('./HelloMessage');
const HelloInput = require('./HelloInput');

module.exports = React.createClass({
  getInitialState () {
    const { name, description } = this.props;
    return {
      name,
      description
    };
  },
  updateName(name) {
    this.setState({ name });
  },
  updateDescription(description) {
    this.setState({ description });
  },
  render() {
    const { name, description } = this.state;
    return (
      <div>
        <HelloMessage name={name} description={description} />
        <HelloInput updateName={this.updateName} updateDescription={this.updateDescription} />
      </div>
    );
  }
});
