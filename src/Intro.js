import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Intro extends Component {
  render() {
    return (
      <div
        style={{
          maxWidth: '100vw',
        }}
      >
        <img
          style={{
            maxWidth: '90vw',
          }}
          src="/logo.png"
          alt=""
        />
      </div>
    );
  }
}

export default Intro;
