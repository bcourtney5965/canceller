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

    var dataToSend = {githubHandle: handle};
    console.log('dataToSend = ', dataToSend);
    this.setState({
      handle: ''
    });

    fetch('http://localhost:3000/test1', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'please work'
      })
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (resJson) {
        console.log('resJson = ', resJson);
      })
      .catch(function (error) {
        console.log(error);
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