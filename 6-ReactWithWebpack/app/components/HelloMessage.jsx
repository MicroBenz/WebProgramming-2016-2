const React = require('react');

module.exports = React.createClass({
  render() {
    const { name, description } = this.props;
    return (
      <div>
        <h1>Hello {name}</h1>
        <h2>{description}</h2>
      </div>
    )
  }
});
