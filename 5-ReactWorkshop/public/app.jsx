const HelloMessage = React.createClass({
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

const HelloInput = React.createClass({
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

const Hello = React.createClass({
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

ReactDOM.render(<Hello name="John" description="John is awesome guy" />, document.getElementById('root'));
