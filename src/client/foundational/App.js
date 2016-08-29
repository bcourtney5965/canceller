import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  updateState(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  handleSubmit(e) {
    e.preventDefault();
    var text = this.state.text.trim();
    if (!text) {
      return;
    }

    var dataToSend = {githubHandle: text};
    this.setState({
      text: ''
    });
  }

  render(){
    return (
      <div>
        <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
          GitHub Handle (Omit any leading '@')<br />
          <input
            type="text"
            placeholder="Github Handle"
            value={this.state.text}
            onChange={this.updateState.bind(this, 'text')} 
          />
          <input type="submit" value="Submit" />
        </form>
        <p>this.state.text = {this.state.text}</p>
      </div>
    )
  }
}

export default App