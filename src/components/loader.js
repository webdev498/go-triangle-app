import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import PubSub from 'pubsub-js';

export default class Loader extends Component {
  constructor() {
    super();

    this.state = {
      loading : false
    };

    PubSub.subscribe('onProcess', (event, data) => {
      this.setState({
        loading: data
      });
    });
  }

  render() {
    return (
      <section id="loader" className={this.state.loading ? "visible" : "hidden"}>
        <div className="container">
          <CircularProgress className="spinner" size={160} thickness={6} />
        </div>
      </section>
    );
  }
}