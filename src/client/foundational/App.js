import React from 'react';
import fetch from 'isomorphic-fetch';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      handle: ''
    }
  }

  updateState(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  handleSubmit(e) {
    e.preventDefault();
    const handle = this.state.handle.trim();
    if (!handle) {
      return;
    }

    var dataToSend = {"githubHandle": handle};
    // console.log('dataToSend = ', dataToSend);
    $.post('http://localhost:3000/api/', dataToSend, function(response) {
      console.log('response = ', response);
    });
    
    this.setState({
      handle: ''
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
            value={this.state.handle}
            onChange={this.updateState.bind(this, 'handle')} 
          />
          <input type="submit" value="Submit" />
        </form>
        <p>this.state.handle = {this.state.handle}</p>
      </div>
    )
  }
}

export default App