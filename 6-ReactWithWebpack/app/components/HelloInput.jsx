const React = require('react');

module.exports = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    this.props.updateName(this.refs.name.value);
    this.props.updateDescription(this.refs.description.value);
  },
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" ref="name" />          
        </div>
        <div>
          <textarea type="text" ref="description" />          
        </div>
        <button>Say hello!</button>
      </form>
    );
  }
});
